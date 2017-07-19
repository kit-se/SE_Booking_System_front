import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

    constructor (private http: HttpClient) {
    }

    login (id: number, password: string) {
        return this.http.get(`http://localhost:3000/login?id=${id}&password=${password}`);
    }
}
