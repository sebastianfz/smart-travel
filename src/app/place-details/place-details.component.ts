import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CityService } from "app/core/service/city.service";
import { environment } from "environments/environment";
import { Utility } from "app/core/utility";

@Component({
    selector: 'place-details',
    templateUrl: './place-details.component.html'
})
export class PlaceDetailsComponent implements OnInit {

    currentPlace: string;
    placeDetails: any;
    sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private cityService: CityService) {

    }

    getPlaceDetails() {
        this.cityService.getPlaceDetails(this.currentPlace)
            .subscribe(result => {
                this.placeDetails = result.result;
            }, error => {
                console.log('Error : ', error);
            });
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.currentPlace = params['place'];
            this.getPlaceDetails();
        })
    }

    getImageUrl(item): string {
        return `${environment.googlePath.image}?maxwidth=1000&photoreference=${item.photo_reference}&key=${environment.googlekey}`;
    }

    getImage(item) {
        if (Utility.isEmpty(item)) {
            return {};
        }
        let style = {
            'background-image': `url(${this.getImageUrl(item[0])})`
        };
        return style;
    }
}
