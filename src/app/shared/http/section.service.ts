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
}
