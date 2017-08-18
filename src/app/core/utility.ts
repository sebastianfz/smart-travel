import { URLSearchParams } from '@angular/http';

export class Utility {

    static isNull(item): boolean {
        return item === undefined || item === null;
    }

    static isEmpty(item): boolean {
        return item === undefined || item === null || item.length === 0 || item === 0 || item === '';
    }

    static convertObjectToParams(paramObj: object) {
        let params = new URLSearchParams();
        for (let key in paramObj) {
            if (paramObj.hasOwnProperty(key)) {
                params.set(key, paramObj[key])
            }
        }
        return params;
    }
}