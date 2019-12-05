import { NgModule } from "@angular/core";
import { QuestionComponent } from './question.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionResolverService } from './question-resolver.service';

@NgModule({
    declarations: [ QuestionComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: QuestionComponent,
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
                resolve: {
                    data: QuestionResolverService
                }
            }
        ])
    ],
    providers: [ QuestionResolverService ]
})
export class QuestionModule {  }
