import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CityService } from "app/core/service/city.service";
import { environment } from "environments/environment";
import { Utility } from "app/core/utility";

@Component({
    selector: 'city-details',
    templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit {

    currentCity: string;
    cityDetails: any;
    sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private cityService: CityService) {

    }

    getCityDetails() {
        this.cityService.getCityDetails(this.currentCity)
            .subscribe(result => {
                this.cityDetails = result.results[0];
                this.getCityPointOfInterest();
            }, error => {
                console.log('Error : ', error);
            });
    }

    getCityPointOfInterest() {
        this.cityService.getCityDetails(this.currentCity + ' point of interest')
            .subscribe(result => {
                this.cityDetails.pointOfInterest = result.results;
            }, error => {
                console.log('Error : ', error);
            });
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.currentCity = params['city'];
            this.getCityDetails();
        })
    }

    getImageUrl(item): string {
        return `${environment.googlePath.image}?maxwidth=1000&photoreference=${item[0].photo_reference}&key=${environment.googlekey}`;
    }

    getImage(item) {
        if (Utility.isEmpty(item)) {
            return {};
        }
        let style = {
            'background-image': `url(${this.getImageUrl(item)})`
        };
        return style;
    }
}
