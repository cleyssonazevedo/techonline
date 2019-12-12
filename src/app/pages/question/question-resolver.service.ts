import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Injectable()
export class QuestionResolverService implements Resolve<any> {
    constructor(
        private readonly api: ApiService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params.id;
        const search = route.queryParams.search;
        return this.api.getData(id, search);
    }
}
