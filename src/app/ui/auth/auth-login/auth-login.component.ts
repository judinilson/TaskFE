import {Component, OnInit} from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {Login} from "../../../core/models/login.model";
import {Router} from "@angular/router";
import {JwtService} from "../../../core/services/jwt.service";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  consts = ConstantHelper
  formData: Login = new Login();

  constructor(
    private router: Router,
    private _jwtService: JwtService,
    public authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("res1232131", this.formData)
    this.authService.postLogin(this.formData).subscribe((res:any) => {
      console.log("res",res)
      this._jwtService.parseJwtResponse(res.model);

      this.router.navigate(['/platform'])
    });
  }
}
