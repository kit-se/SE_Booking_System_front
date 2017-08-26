import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class SectionService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public getSectionList (): Observable<any> {
        return this.http.get<any>(this.global.url + `/section`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public postSection (data: any): Observable<any> {
        return this.http.post(this.global.url + `/post-section`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public deleteSection (id: number): Observable<any> {
        let data = {
            id: id
        };
        return this.http.put(this.global.url + `/delete-section`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public postLayout (data: FormData): Observable<any> {
        return this.http.post(this.global.url + `/layout`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public getLayout (): Observable<any> {
        return this.http.get(this.global.url + `/layout`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
