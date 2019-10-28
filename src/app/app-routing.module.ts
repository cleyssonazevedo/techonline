import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: environment.production
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
