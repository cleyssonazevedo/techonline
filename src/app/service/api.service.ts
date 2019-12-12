import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private readonly url: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.url = environment.url;
    }

    getData(id?: string, search?: string) {
        let params = new HttpParams();

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get(`${this.url}/${id || ''}`, { params });
    }
}
