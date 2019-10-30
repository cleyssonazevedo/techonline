import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultTemplateComponent } from './default-template.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MenuModule,
        FooterModule
    ],
    declarations: [ DefaultTemplateComponent ],
    exports: [ DefaultTemplateComponent ]
})
export class DefaultTemplateModule {  }
