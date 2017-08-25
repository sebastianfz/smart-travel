import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CityService } from "app/core/service/city.service";
import { environment } from "environments/environment";
import { Utility } from "app/core/utility";
import { CommonService } from "app/core/service/common.service";
import { UserService } from "app/core/service/user.service";
import { FavouritePlace } from "app/model/favourite-place";

@Component({
    selector: 'place-details',
    templateUrl: './place-details.component.html'
})
export class PlaceDetailsComponent implements OnInit {

    currentPlace: string;
    placeDetails: any;
    favouritePlaceList: FavouritePlace[] = [];
    sub: any;
    isFavouritePlace: boolean;
    user = this.commonService.getLocalStorageData('profile');
    isLoggedIn = !Utility.isNull(this.user);

    constructor(private route: ActivatedRoute, private router: Router, private cityService: CityService,
        private userService: UserService, private commonService: CommonService) {

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
        });
        if(this.isLoggedIn){
          this.getFavPlaceDetails();
        }
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

    getFavPlaceDetails() {
        this.userService.getFavouritePlaces(this.user.email)
            .subscribe(result => {
                this.favouritePlaceList = result || [];

                this.isFavouritePlace = this.favouritePlaceList.some(x => x.placeId === this.currentPlace);
                console.log(this.isFavouritePlace);
            }, error => {
                console.log('Error : ', error);
            });
    }

    addToFavourite() {
        let saveObj = {
            email: this.user.email,
            placeId: this.currentPlace
        }

        this.userService.saveFavouritePlaces(saveObj)
            .subscribe((result) => {
                this.favouritePlaceList.push(result.result);
                this.isFavouritePlace = true;
            })
    }
}
