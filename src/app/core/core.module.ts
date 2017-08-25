

import { NgModule } from '@angular/core';
import { CityService } from "./service/city.service";
import { HttpModule, RequestOptions, Http } from "@angular/http";
import { AuthService } from "app/core/service/auth.service";
import { UserService } from "app/core/service/user.service";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { CommonService } from "app/core/service/common.service";
import { AuthGuard } from "app/core/service/auth-guard.service";
import { FeedbackService } from "app/core/service/feedback.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        CityService,
        AuthService,
        UserService,
        CommonService,
        FeedbackService,
        AuthGuard,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})
export class CoreModule { }
