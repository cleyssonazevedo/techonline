import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    active: boolean;
    searchText: FormControl;

    constructor() {
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
            console.log('Pesquisar por', this.searchText.value);
        }
    }
}
