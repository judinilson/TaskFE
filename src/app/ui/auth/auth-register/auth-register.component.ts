import { Component, OnInit } from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {UserRegister} from "../../../core/models/user.model";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  consts = ConstantHelper
  hide = true;

  formData = new UserRegister()

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.create(this.formData).subscribe((value:any) => {
      console.log(value.model)
    })
  }

}
