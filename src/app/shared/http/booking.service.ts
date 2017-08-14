import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class BookingService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    // 예약 현황
    public getBookingInfoList (dateFlag: string): Observable<any> {
        return this.http.get(this.global.url + `/bookingInfo?date_flag=${dateFlag}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    // 마이페이지용 예약 현황
    public getBookingInfoListByUser (id: string): Observable<any> {
        return this.http.get(this.global.url + `/mypage?id=${id}`).map((res:any) => {
            if ( res.status === 'success') {
                return res.result;
            } else {
                alert( '[ERROR]: ' + res.result );
            }
        });
    }

    // 예약
    public book (bookingData: any): Observable<any> {
        return this.http.post(this.global.url + `/book`, bookingData).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
