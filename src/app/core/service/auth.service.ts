// services/auth.service.ts
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { tokenNotExpired } from 'angular2-jwt';
import { UserService } from "app/core/service/user.service";
// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

    private lock = new Auth0Lock(environment.auth0.clientId, environment.auth0.domain);

    constructor(private userService: UserService) {

    }

    login() {
        this.lock.show({
            dict: {
                signin: {
                    title: "Smart Travel"
                }
            },
            icon: 'assets/images/logo-symbol-complex-colors.png'
        }, (error: string, profile: Object, id_token: string) => {
            if (error) {
                //console.log(error);
            } else {
                // We get a profile object for the user from Auth0
                localStorage.setItem('profile', JSON.stringify(profile));
                // We also get the user's JWT
                localStorage.setItem('id_token', id_token);
                localStorage.setItem('token', id_token);
                this.userService.saveUser(profile)
                    .subscribe(() => {
                        window.location.reload();
                    });
            }
        });
    }

    logout() {
        // To log out, we just need to remove
        // the user's profile and token
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        localStorage.removeItem('token');
        window.location.reload();
    }

    loggedIn(): boolean {
        return tokenNotExpired('id_token');
    }
}