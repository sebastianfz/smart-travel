import { Component, OnInit } from '@angular/core';
import { CityService } from "app/core/service/city.service";
import { City } from "app/model/city";

@Component({
    selector: 'city-list',
    templateUrl: './city-list.component.html'
})
export class CityListComponent implements OnInit {

    cityList: City[];

    constructor(private cityService: CityService) {

    }

    getCityList() {
        this.cityService.getCities()
            .subscribe(result => {
                this.cityList = result;
            })
    }

    ngOnInit(): void {
        this.getCityList();
    }
}
