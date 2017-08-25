import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { adminRoutingComponents, AdminRoutingModule } from "app/admin/admin-routing.module";
import { SharedModule } from "app/shared/shared.module";



@NgModule({
    declarations: [
        adminRoutingComponents,
    ],
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class AdminModule { }
