import { Component } from '@angular/core';

import { AuthService } from "app/core/service/auth.service";

@Component({
    selector: 'footer-bar',
    templateUrl: './footer-bar.component.html'
})
export class FooterBarComponent {
    constructor(public auth: AuthService) {

    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

}
