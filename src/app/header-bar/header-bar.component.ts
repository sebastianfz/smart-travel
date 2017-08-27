import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AuthService } from "app/core/service/auth.service";

import { MapsAPILoader } from "@agm/core";
import { } from '@types/googlemaps';
import { Utility } from "app/core/utility";
import { Router } from "@angular/router";



@Component({
    selector: 'header-bar',
    templateUrl: './header-bar.component.html'
})
export class HeaderBarComponent implements OnInit {

    @ViewChild("search")
    public searchElementRef: ElementRef;

    searchData: string;
    showMenu: boolean;


    constructor(private router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, public auth: AuthService) {
      this.router.events.subscribe( (e)  => {
        this.showMenu = false;
      })
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

    ngOnInit(): void {
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

    keyDownFunction(event) {
        if (event.keyCode == 13) {
            this.searchCity();
            // rest of your code
        }
    }

    searchCity(): void {
        if (Utility.isNull(this.searchData)) {
            return;
        }
        this.router.navigate(['../city', this.searchData]);
    }

}
