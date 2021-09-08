import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-cases',
  templateUrl: './account-cases.component.html',
  styleUrls: ['./account-cases.component.scss']
})
export class AccountCasesComponent implements OnInit {
  @Input("cases") cases : any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
