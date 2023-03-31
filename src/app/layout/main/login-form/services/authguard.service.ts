import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user-api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private accountService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.isLoggedIn();
        if (user) {
            return true;
        }


        this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    }
}