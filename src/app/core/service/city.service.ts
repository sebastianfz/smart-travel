
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { environment } from "environments/environment";
import 'rxjs/add/operator/map';

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
}