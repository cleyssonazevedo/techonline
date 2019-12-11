import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ContatoComponent
            }
        ])
    ],
    declarations: [ ContatoComponent ]
})
export class ContatoModule {  }
