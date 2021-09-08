import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListResponse, SingleResponse} from "../models/response.model";
import {News} from "../models/news";
import {ConstantHelper} from "../helpers/constant-helper";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = ConstantHelper.urlNews

  constructor(private _http:HttpClient) { }

  getAll(){
    return  this._http.get<ListResponse<News>>(this.baseUrl).pipe(map(res=>{
      res.model.forEach(item=>{
        if (!item.pictureUrl){
          item.pictureUrl = ConstantHelper.pictureDefaultNews
        }
      })
      return res
    }))
  }
}
