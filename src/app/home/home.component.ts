import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CityService } from "app/core/service/city.service";
import { City } from "app/model/city";
import { MapsAPILoader } from "@agm/core";
import { } from '@types/googlemaps';
import { Utility } from "app/core/utility";
import { Router } from "@angular/router";


@Component({
    selector: 'home-page',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    cityList: City[];

    @ViewChild("search")
    public searchElementRef: ElementRef;

    searchData: string;

    constructor(private router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private cityService: CityService) {

    }

    getCityList() {
        this.cityService.getTopCities()
            .subscribe(result => {
                this.cityList = result;
            })
    }

    ngOnInit(): void {
        this.getCityList();

        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['(cities)']
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        this.searchData = null;
                        return;

                    }
                    this.searchData = place.name;
                    this.searchCity();
                });
            });
        });
    }

    searchCity(): void {
        if (Utility.isNull(this.searchData)) {
            return;
        }
        this.router.navigate(['../city', this.searchData]);
    }
}
