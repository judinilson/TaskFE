import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { JwtResponse } from '../models/jwt-user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    currentUser: JwtResponse | null = null;

    constructor(
        private _router: Router,
        private _jwtService: JwtService,
    ) {
        this._jwtService.getJwtUser().subscribe(res => this.currentUser = res)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("route.data.roles", this.currentUser)
        if (this.currentUser) {
          console.log(route.data.roles)
          console.log(route.data.roles.indexOf(this.currentUser?.role))
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(this.currentUser?.role) === -1) {
                console.log("Error role access")
                // role not authorised so redirect to home page
                this._router.navigate(['/auth/login']);

                return false;
            }

            // authorised so return true
            return true;

        }

        console.log("Error authorise access")
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });

        return false;
    }
}
