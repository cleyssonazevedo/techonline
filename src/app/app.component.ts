import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    private readonly http: HttpClient
  ) {
    this.http.get('https://techonline-api.herokuapp.com/', {
      observe: 'body',
      responseType: 'text'
    }).subscribe((data) => console.log(data));
  }
}
