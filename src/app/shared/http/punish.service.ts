import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class PunishService {

    constructor (private http: HttpClient, private global: GlobalService, private location: Location) {
    }

    public getPunishList (): Observable<any> {
        return this.http.get(this.global.url + `/sanction`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public postPunish (data: any): Observable<any> {
        return this.http.put(this.global.url + `/post-sanction`, data).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
