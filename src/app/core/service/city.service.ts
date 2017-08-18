
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import { environment } from "environments/environment";
import 'rxjs/add/operator/map';
import { Utility } from "app/core/utility";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CityService {

    APIPath: string = environment.apiPath;

    constructor(private http: Http) {

    }

    getCities(): any {
        return this.http.get(this.APIPath + 'city')
            .map((res: Response) => res.json());
    }

    getTopCities(): any {
        return this.http.get(this.APIPath + 'city/top')
            .map((res: Response) => res.json());
    }

    getCityDetails(city: string): any {
        return this.http.get(this.APIPath + 'city/citydetails/' + city)
            .map((res: any) => {
                return res.json();
            });
    }

    getPlaceDetails(placeId: string): any {
        return this.http.get(this.APIPath + 'city/placedetails/' + placeId)
            .map((res: any) => {
                return res.json();
            });
    }

}