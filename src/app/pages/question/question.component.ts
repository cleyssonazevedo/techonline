import { Component, OnDestroy, Optional, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, isPlatformServer } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
    subs1: Subscription;
    subs2: Subscription;

    question: any;
    search: FormControl;

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        readonly route: ActivatedRoute,

        private readonly meta: Meta,
        @Optional() @Inject(RESPONSE) private readonly response?: any,
        @Optional() @Inject(PLATFORM_ID) private readonly platform?: any
    ) {
        this.search = new FormControl(null);
        this.subs1 = route.data
            .subscribe((params) => this.question = params.data);

        this.subs2 = route.queryParams
            .subscribe((params) => this.search.setValue(params.busca));
    }

    ngOnInit() {
        if (isPlatformServer(this.platform)) {
            console.log('Run in server side');
            this.response.status(404);

            this.meta.addTags([
                {
                    name: 'robots',
                    content: 'noindex'
                },
                {
                    name: 'googlebot',
                    content: 'noindex'
                }
            ]);
        }
    }

    checkIsRoot() {
        return Array.isArray(this.question);
    }

    onClick(option: any) {
        if (option.options.lenght > 1) {
            this.router.navigate(['/tutoriais', option._id]);
        } else {
            this.router.navigate(['/tutoriais', option.options[0]]);
        }
    }

    searchText() {
        const { value } = this.search as { value: string };

        if (value && value !== '' && value.trim() !== '') {
            this.router.navigate(['/tutoriais'], {
                queryParams: {
                    busca: value
                },
                fragment: 'pesquisa'
            });
        } else {
            this.router.navigate(['/tutoriais'], {
                queryParams: {
                    busca: null
                }
            });
        }
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
