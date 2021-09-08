import { Component, OnInit } from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";

@Component({
  selector: 'app-platform-main',
  templateUrl: './platform-main.component.html',
  styleUrls: ['./platform-main.component.scss']
})
export class PlatformMainComponent implements OnInit {
  consts = ConstantHelper



  constructor() { }

  ngOnInit(): void {
  }

}
