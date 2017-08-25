import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CityService } from "app/core/service/city.service";
import { environment } from "environments/environment";
import { Utility } from "app/core/utility";
import { CommonService } from "app/core/service/common.service";
import { UserService } from "app/core/service/user.service";
import { FavouritePlace } from "app/model/favourite-place";

@Component({
    selector: 'place-list',
    templateUrl: './place-list.component.html'
})
export class PlaceListComponent implements OnInit {

    sub: any;
    hasData: boolean;
    favouritePlaceList: FavouritePlace[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private cityService: CityService,
        private commonService: CommonService, private userService: UserService) {

    }

    getPlaceDetails() {
        this.hasData = false;
        let user = this.commonService.getLocalStorageData('profile');
        this.userService.getFavouritePlaces(user.email)
            .subscribe(result => {
                this.favouritePlaceList = result || [];


                this.favouritePlaceList.forEach(item => {
                    this.cityService.getPlaceDetails(item.placeId)
                        .subscribe(result => {
                            item.placeData = result.result;
                        })
                });
                this.hasData = true;
            }, error => {
                console.log('Error : ', error);
            });
    }

    ngOnInit(): void {
        this.getPlaceDetails();
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


    removePlace(item: FavouritePlace) {
        this.userService.deleteFavouritePlaces(item._id)
            .subscribe(x => {
                this.favouritePlaceList.splice(this.favouritePlaceList.indexOf(item), 1);
            })
    }
}
