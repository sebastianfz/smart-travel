import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { CityListComponent } from "app/city-list/city-list.component";
import { CityDetailsComponent } from "app/city-details/city-details.component";
import { PlaceDetailsComponent } from "app/place-details/place-details.component";
import { PlaceListComponent } from "app/place-list/place-list.component";
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";
import { AuthGuard } from "app/core/service/auth-guard.service";
import { ContactUsComponent } from "app/contact-us/contact-us.component";
import { AboutUsComponent } from "app/about-us/about-us.component";
import { AdminComponent } from "app/admin/admin.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "aboutus", component: AboutUsComponent },
    { path: "cities", component: CityListComponent },
    { path: "city/:city", component: CityDetailsComponent },
    { path: "place/:place", component: PlaceDetailsComponent },
    { path: "contactus", component: ContactUsComponent },
    { path: "favouriteplace", component: PlaceListComponent, canActivate: [AuthGuard] },
    { path: "admin-panel", loadChildren: "app/admin/admin.module#AdminModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, CityListComponent, CityDetailsComponent,
    PlaceDetailsComponent, PlaceListComponent, ContactUsComponent, AboutUsComponent];