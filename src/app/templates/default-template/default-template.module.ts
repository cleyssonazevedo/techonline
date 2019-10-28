import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { DefaultTemplateComponent } from './default-template.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MenuModule
    ],
    declarations: [ DefaultTemplateComponent ],
    exports: [ DefaultTemplateComponent ]
})
export class DefaultTemplateModule {  }
