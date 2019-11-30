import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { MenuModule } from './components/menu/menu.module';

import localeBR from '@angular/common/locales/pt';
import localeBRExtra from '@angular/common/locales/extra/pt';
import { DefaultTemplateModule } from './templates/default-template/default-template.module';
import { Page404Module } from './pages/404/page-404.module';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeBR, 'pt-BR', localeBRExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'techOnlineApp' }),
    AppRoutingModule,

    DefaultTemplateModule,
    Page404Module,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
