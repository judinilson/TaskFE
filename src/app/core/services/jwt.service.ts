import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConstantHelper } from '../helpers/constant-helper';
import { JwtResponse } from '../models/jwt-user.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private _jwtSubject = new BehaviorSubject<JwtResponse | null>(null)
  jwtData = this._jwtSubject.asObservable();

  constructor() {
    const jwtTokenStorage = JSON.parse(localStorage.getItem(ConstantHelper.USER_TOKEN) || "null");

    if (jwtTokenStorage != null) {
      this.parseJwtResponse(jwtTokenStorage)
    }
  }

  getJwtUser() {
    return this.jwtData
  }

  getUserDataFromToken(): User {
    //fix !! this
    const jwtData = JSON.parse(atob(this._jwtSubject.value!.token!.split('.')[1] || 'null'));
    const user = new User();

    user.userId = jwtData.nameid
    user.roles = jwtData.role
    user.imageUrl = jwtData.at_hash
    console.log(user)

    return user;
  }

  parseJwtResponse(user: any) {
    this.removeJwt()

    const jwtResponse = new JwtResponse()
    jwtResponse.token = user.token
    jwtResponse.refreshToken = user.refreshToken

    console.log("jwtUser", jwtResponse)
    const jwtToken = JSON.parse(atob(jwtResponse.token!.split('.')[1] || 'null'));

    jwtResponse.userId = jwtToken.nameid
    jwtResponse.role = jwtToken.role
    jwtResponse.imageUrl = jwtToken.at_hash
    console.log(jwtResponse)

    jwtResponse.expire = new Date(jwtToken.exp * 1000);

    const timeoutSec = jwtResponse.expire.getTime() - Date.now() - (60 * ConstantHelper.MINUTE_OFFSET_REFRESH * 1000);
    jwtResponse.timeout = new Date(timeoutSec);

    this._jwtSubject.next(jwtResponse);
    console.log(JSON.stringify(jwtResponse))
    localStorage.setItem(ConstantHelper.USER_TOKEN, JSON.stringify(this.getJwtJson()));
  }

  getJwtJson() {
    return {
      "token": this._jwtSubject.value?.token,
      "refreshToken": this._jwtSubject.value?.refreshToken,
    }
  }

  removeJwt() {
    localStorage.removeItem(ConstantHelper.USER_TOKEN);
    this._jwtSubject.next(null)
  }
}
