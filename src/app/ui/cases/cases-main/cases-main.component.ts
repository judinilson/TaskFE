import { Component, OnInit } from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";

@Component({
  selector: 'app-cases-main',
  templateUrl: './cases-main.component.html',
  styleUrls: ['./cases-main.component.scss']
})
export class CasesMainComponent implements OnInit {
  consts = ConstantHelper

  cases = [1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
