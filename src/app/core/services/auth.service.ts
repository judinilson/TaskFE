import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Login } from '../models/login.model';
import { JwtService } from './jwt.service';
import {ConstantHelper} from "../helpers/constant-helper";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _baseUrl = ConstantHelper.urlAuth;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _jwtService: JwtService,
  ) { }

  postLogin(form: Login) {
    console.log(form)
    return this._http.post(`${this._baseUrl}/login`, JSON.stringify(form));
  }

  logout() {
    this._http.get(`${this._baseUrl}/logout`).subscribe(res => {
      this._jwtService.removeJwt()
      this._router.navigate(['/auth/login']);
    })
  }

  // refreshToken() {
  //   const user = localStorage.getItem(this.USER_TOKEN)
  //   console.log("tokenrefresh:", user)
  //   return this.http.post<any>(`${this.baseUrl}/RefreshToken`, user)
  //     .pipe(map((res:any) => {
  //       const model = res.model

  //       localStorage.removeItem(this.USER_TOKEN);
  //       localStorage.setItem(this.USER_TOKEN, JSON.stringify({ "token": model.token, "refreshToken": model.refreshToken }));

  //       console.log("refresh token trigger")
  //       this.setTimeoutDate();
  //       return user;
  //     }));
  // }
}
