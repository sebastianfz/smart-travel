import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "app/admin/user-list/user-list.component";
import { FeedbackListComponent } from "app/admin/feedback-list/feedback-list.component";
import { AdminComponent } from "app/admin/admin.component";

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [
        { path: "userlist", component: UserListComponent },
        { path: "feedback", component: FeedbackListComponent },
        { path: '', redirectTo: 'userlist', pathMatch: 'full' },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }

export const adminRoutingComponents = [UserListComponent, FeedbackListComponent, AdminComponent];