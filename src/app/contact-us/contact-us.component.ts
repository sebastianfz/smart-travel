import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FeedbackService } from "app/core/service/feedback.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

    contactUsForm: FormGroup;
    isSaved: boolean;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private feedbackService: FeedbackService) {

    }

    createForm() {
        this.contactUsForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            comments: ['']
        })
    }

    ngOnInit(): void {
        this.createForm();
    }

    saveFeedback() {
        let saveObj = this.contactUsForm.value
        this.isSaved = false;
        this.feedbackService.saveFeedback(saveObj)
            .subscribe((result) => {
                this.isSaved = true;
                this.createForm();
            })
    }
}
