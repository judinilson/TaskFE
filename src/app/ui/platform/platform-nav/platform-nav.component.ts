import { Component, OnInit } from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-platform-nav',
  templateUrl: './platform-nav.component.html',
  styleUrls: ['./platform-nav.component.scss']
})
export class PlatformNavComponent implements OnInit {

  consts = ConstantHelper

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
