import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
    question: any;

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        readonly route: ActivatedRoute
    ) {
        route.data
            .pipe(tap(console.log))
            .subscribe((params) => this.question = params.data);
    }

    checkIsRoot() {
        return Array.isArray(this.question);
    }

    onClick(option: any) {
        console.log('Clicked', option);
        if (option.options.lenght > 1) {
            this.router.navigate(['/question', option._id]);
        } else {
            this.router.navigate(['/question', option.options[0]]);
        }
    }

    back() {
        this.location.back();
    }
}
