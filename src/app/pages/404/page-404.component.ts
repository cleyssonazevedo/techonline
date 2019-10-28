import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app--page-not-found',
    templateUrl: './page-404.component.html',
    styleUrls: ['./page-404.component.scss']
})
export class Page404Component implements OnInit {
    constructor(
        private readonly meta: Meta
    ) {  }

    ngOnInit() {
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
