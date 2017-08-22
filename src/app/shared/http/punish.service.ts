import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class PunishService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public postPunish (data: any): Observable<any> {
        return this.http.put(this.global.url + `/post-sanction`, data).map((res: any) => {
            if ( res.status === 'success' ) {
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
