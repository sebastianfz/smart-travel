export class FavouritePlace {
    _id?: string;
    email: string;
    placeId: string;
    createdDate: Date;
    placeData?: any;

    constructor() {
        this.placeData = null;
    }
}