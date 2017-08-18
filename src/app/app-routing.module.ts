import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { CityListComponent } from "app/city-list/city-list.component";
import { CityDetailsComponent } from "app/city-details/city-details.component";
import { PlaceDetailsComponent } from "app/place-details/place-details.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "cities", component: CityListComponent },
    { path: "city/:city", component: CityDetailsComponent },
    { path: "place/:place", component: PlaceDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, CityListComponent, CityDetailsComponent, PlaceDetailsComponent];