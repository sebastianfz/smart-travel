import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from "app/core/service/auth.service";
// Import our authentication service

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.auth.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }

}