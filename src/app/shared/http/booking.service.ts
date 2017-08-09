import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class BookingService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public getBookingInfoList (dateFlag: string): Observable<any> {
        return this.http.get(this.global.url + `/bookingInfo?date_flag=${dateFlag}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
