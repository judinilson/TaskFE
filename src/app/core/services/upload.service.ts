import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantHelper } from '../helpers/constant-helper';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private readonly _baseUrl = ConstantHelper.urlUpload

  constructor(private _http: HttpClient) { }

  upload(formData: FormData) {
    //fix. paste from management-user-create.component
  }
}
