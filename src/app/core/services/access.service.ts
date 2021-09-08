import { Injectable } from '@angular/core';
import { Role } from '../models/enums';
import { JwtResponse } from '../models/jwt-user.model';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  currentUser: JwtResponse | null = null

  constructor(private jwtService: JwtService) {
    this.jwtService.getJwtUser().subscribe(res => {
      this.currentUser = res
    })
  }

  isAdmin(): boolean {
    return this.currentUser?.role.indexOf(Role.admin) !== -1;
  }

  isManager(): boolean {
    console.log(this.currentUser?.role.indexOf(Role.manager))
    return this.currentUser?.role.indexOf(Role.manager) !== -1;
  }
}
