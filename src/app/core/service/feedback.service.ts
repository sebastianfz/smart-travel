
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import { environment } from "environments/environment";
import 'rxjs/add/operator/map';
import { Utility } from "app/core/utility";
import { Observable } from "rxjs/Observable";
import { Feedback } from "app/model/feedback";

@Injectable()
export class FeedbackService {

    APIPath: string = environment.apiPath;

    constructor(private http: Http) {

    }

    getFeedbacks(): any {
        return this.http.get(this.APIPath + 'feedback')
            .map((res: Response) => res.json());
    }

    saveFeedback(data: Feedback): any {
        return this.http.post(this.APIPath + 'feedback', data)
            .map((res: Response) => res.json());
    }


}