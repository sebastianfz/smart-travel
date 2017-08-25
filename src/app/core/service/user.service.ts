import { AuthHttp } from 'angular2-jwt';
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import 'rxjs/Rx';
import { Http } from "@angular/http";

@Injectable()
export class UserService {

    APIPath: string = environment.apiPath;

    constructor(private authHttp: AuthHttp, private http: Http) {

    }

    getUserList(): any {
        return this.http.get(this.APIPath + 'user/')
            .map((res: any) => {
                return res.json();
            });
    }

    getUser(email: string): any {
        return this.authHttp.get(this.APIPath + 'user/' + email)
            .map((res: any) => {
                return res.json();
            });
    }

    saveUser(user: any): any {
        return this.http.post(this.APIPath + 'user/', user)
            .map((res: any) => {
                return res.json();
            });
    }

    getFavouritePlaces(email: string): any {
        return this.authHttp.get(this.APIPath + 'places/' + email)
            .map((res: any) => {
                return res.json();
            });
    }

    saveFavouritePlaces(data: any): any {
        return this.authHttp.post(this.APIPath + 'places/', data)
            .map((res: any) => {
                return res.json();
            });
    }

    deleteFavouritePlaces(id: string): any {
        return this.authHttp.delete(this.APIPath + 'places/' + id)
            .map((res: any) => {
                return res.json();
            });
    }

}