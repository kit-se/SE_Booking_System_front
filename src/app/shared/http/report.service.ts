import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class ReportService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public postReport (data: FormData): Observable<any> {
        return this.http.post(this.global.url + `/report`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public getReportList (): Observable<any> {
        return this.http.get(this.global.url + `/report`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        })
    }

    public getReportById (id: number): Observable<any> {
        return this.http.get(this.global.url + `/report/${id}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        })
    }
}
