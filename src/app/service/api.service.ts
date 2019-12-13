import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private readonly url: string;

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router
    ) {
        this.url = environment.url;
    }

    getData(id?: string, search?: string) {
        let params = new HttpParams();

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get(`${this.url}/${id || ''}`, { params })
            .pipe(
                catchError((error) => {
                    this.router.navigate(['/500']);
                    throw error;
                })
            );
    }

    saveContato(contato: { nome?: string, email?: string, assunto: string, mensagem: string }) {
        return this.http.post(`${this.url}/contato`, contato);
    }
}
