import { Component, OnInit } from '@angular/core';
import { FeedbackService } from "app/core/service/feedback.service";

@Component({
    selector: 'feedback-list',
    templateUrl: './feedback-list.component.html'
})

export class FeedbackListComponent implements OnInit {
    feedbackList: any[];

    constructor(private feedbackService: FeedbackService) {

    }

    ngOnInit(): void {
        this.getFeedbackList();
    }

    getFeedbackList() {
        this.feedbackService.getFeedbacks()
            .subscribe(result => {
                this.feedbackList = result;
            })
    }
}
