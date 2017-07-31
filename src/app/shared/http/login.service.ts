import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class LoginService {
    constructor (private http: HttpClient, @Inject(GlobalService) private global:GlobalService) {

    }

    login (id: number, password: string): Observable<any> {
        const token: string = 'Bearer ' + btoa(`${id}:${password}`);
        const header: HttpHeaders = new HttpHeaders().set('Authorization', token);
        return this.http.post(`${this.global.url}/login`, null, { headers: header });
    }
}
