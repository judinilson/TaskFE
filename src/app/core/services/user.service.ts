import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantHelper } from '../helpers/constant-helper';
import { IdString } from '../models/json-helpers.model';
import {PagedResponse, SingleResponse} from '../models/response.model';
import { User, UserRegister } from '../models/user.model';
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _baseUrl = ConstantHelper.urlUserAdmin

  constructor(private _http: HttpClient
  ) {

  }

  create(data: UserRegister) {
    return this._http.post(`${this._baseUrl}`, JSON.stringify(data))
  }

  getCurrentUserProfile(){
    return this._http.post<SingleResponse<User>>(`${this._baseUrl}/info`, JSON.stringify('{}'))
  }

  delete(id: string) {
    const data = new IdString(id)

    return this._http.delete(this._baseUrl, { body: JSON.stringify(data) })
  }

  update(user: User) {
    return this._http.put(this._baseUrl, JSON.stringify(user))
  }
}
