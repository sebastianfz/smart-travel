import { Component, OnInit } from '@angular/core';
import { CityService } from "app/core/service/city.service";
import { City } from "app/model/city";

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    cityList: City[];

    constructor(private cityService: CityService) {

    }

    getCityList() {
        this.cityService.getTopCities()
            .subscribe(result => {
                this.cityList = result;
            })
    }

    ngOnInit(): void {
        this.getCityList();
    }
}
