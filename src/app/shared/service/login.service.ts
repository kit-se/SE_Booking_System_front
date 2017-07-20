import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

    constructor (private http: HttpClient) {
    }

    login (id: number, password: string) {
        const token: string = 'Bearer ' + btoa(`${id}:${password}`);
        const header: HttpHeaders = new HttpHeaders().set('Authorization', token);
        return this.http.post(`http://localhost:3000/login`, null, { headers: header });
    }
}
