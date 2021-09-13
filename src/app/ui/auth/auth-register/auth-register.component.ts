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

  formData = new UserRegister()
  password: string | undefined;
  show = false;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.password = 'password'
  }

  onSubmit(){
    this.userService.create(this.formData).subscribe((value:any) => {
      console.log(value.model)
    })
  }

  showPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
