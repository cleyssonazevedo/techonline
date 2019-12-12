import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
    group: FormGroup;

    constructor() {
        this.group = new FormGroup({
            nome: new FormControl(null),
            email: new FormControl(null),
            assunto: new FormControl(null, Validators.required),
            mensagem: new FormControl(null, Validators.required)
        });
    }

    enviar() {
        console.log(this.group);
    }
}
