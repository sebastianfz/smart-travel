import { Component, OnInit } from '@angular/core';
import { UserService } from "app/core/service/user.service";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {


    userList: any[];

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.getUserList();
    }

    getUserList() {
        this.userService.getUserList()
            .subscribe(result => {
                this.userList = result;
            });
    }
}
