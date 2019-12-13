import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    active: boolean;
    searchText: FormControl;

    constructor(
        private readonly router: Router
    ) {
        this.searchText = new FormControl(null, Validators.required);
    }

    activeButton() {
        if (this.active) {
            // Alternando de ligado para desligado
            this.searchText.reset();
        }

        this.active = !this.active;
    }

    pesquisar() {
        if (this.searchText.valid) {
            const { value } = this.searchText as { value: string };

            if (value && value !== '' && value.trim() !== '') {
                this.router.navigate(['/tutoriais'], {
                    queryParams: {
                        busca: value
                    }
                });
            } else {
                this.router.navigate(['/tutoriais'], {
                    queryParams: {
                        busca: null
                    }
                });
            }

            this.active = false;
        }
    }
}
