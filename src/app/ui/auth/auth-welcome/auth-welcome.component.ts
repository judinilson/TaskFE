import { Component, OnInit } from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.component.html',
  styleUrls: ['./auth-welcome.component.scss']
})
export class AuthWelcomeComponent implements OnInit {

  constant = ConstantHelper

  constructor() { }

  ngOnInit(): void {
  }

}
