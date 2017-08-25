

import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {

    getLocalStorageData(key): any {
        let data = window.localStorage.getItem(key);
        return JSON.parse(data);
    }
}