import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DefaultTemplateComponent } from './templates/default-template/default-template.component';
import { Page404Component } from './pages/404/page-404.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'question',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/question/question.module').then((m) => m.QuestionModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./pages/question/question.module').then((m) => m.QuestionModule)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: environment.production,
    anchorScrolling: "enabled",
    scrollPositionRestoration: "top"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
