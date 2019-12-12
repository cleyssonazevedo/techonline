import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnDestroy {
    subs1: Subscription;
    subs2: Subscription;

    question: any;
    search: FormControl;

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        readonly route: ActivatedRoute
    ) {
        this.search = new FormControl(null);
        this.subs1 = route.data
            .subscribe((params) => this.question = params.data);

        this.subs2 = route.queryParams
            .subscribe((params) => this.search.setValue(params.search));
    }

    checkIsRoot() {
        return Array.isArray(this.question);
    }

    onClick(option: any) {
        if (option.options.lenght > 1) {
            this.router.navigate(['/question', option._id]);
        } else {
            this.router.navigate(['/question', option.options[0]]);
        }
    }

    searchText() {
        this.router.navigate(['/question'], {
            queryParams: {
                search: this.search.value
            }
        });
    }

    back() {
        this.location.back();
    }

    ngOnDestroy() {
        if (this.subs1) {
            this.subs1.unsubscribe();
        }

        if (this.subs2) {
            this.subs2.unsubscribe();
        }
    }
}
