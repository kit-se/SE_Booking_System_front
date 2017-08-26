import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class AdminService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public getAdminList (): Observable<any> {
        return this.http.get(this.global.url + `/admin`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.err);
            }
        });
    }

    public getAdminByCredit (credit: string): Observable<any> {
        return this.http.get(this.global.url + `/admin/${credit}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.err);
            }
        });
    }

    public postAdmin (data: any): Observable<any> {
        return this.http.post(this.global.url + `/post-admin`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.err);
            }
        });
    }

    public deleteAdmin (id: number): Observable<any> {
        let data = {
            id: id
        };
        return this.http.put(this.global.url + `/delete-admin`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result
            } else {
                alert('[ERROR]: ' + res.err);
            }
        });
    }
}
