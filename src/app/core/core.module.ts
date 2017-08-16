

import { NgModule } from '@angular/core';
import { CityService } from "./service/city.service";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        CityService
    ]
})
export class CoreModule { }
