import {Component, OnInit} from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {CasesEnum} from "../../../core/models/enums";
import {UserService} from "../../../core/services/user.service";
import {IUser, User} from "../../../core/models/user.model";

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  consts = ConstantHelper
  cases = CasesEnum

  selectTypeCases = CasesEnum.My
  user:IUser = new User()

  casesFavorite = [1, 2, 3]
  casesMy = [1, 2, 3, 4, 5, 6]

  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {
    this._userService.getCurrentUserProfile().subscribe(res=>{
      this.user = res.model!
    })
  }

  setCasesType(selectType:CasesEnum) {
    this.selectTypeCases = selectType;
  }
}
