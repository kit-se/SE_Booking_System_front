import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../../shared/http/booking.service';
import { SectionService } from '../../shared/http/section.service';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: [ './main-dashboard.component.scss' ]
})
export class MainDashboardComponent implements OnInit {
    dateFlag: string;
    date: string;
    sectionList$: Observable<any>;
    selectedSection: string;
    todayBookingInfoList$: Observable<any>;
    tomorrowBookingInfoList$: Observable<any>;
    selectedTime: number[];

    constructor (private sectionService: SectionService, private bookingService: BookingService) {
    }

    ngOnInit () {
        this.dateFlag = 'today';
        this.date = moment().format('YY. MM. DD');
        this.sectionList$ = this.sectionService.getSectionList();
        this.selectedSection = '';
        this.todayBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
    }

    public switchDate( date: string ) {
        this.dateFlag = date;
        if ( this.dateFlag === 'today' ) {
            this.date = moment().format('YY. MM. DD');
            this.todayBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
        } else if ( this.dateFlag === 'tomorrow' ) {
            this.date = moment().add(1, 'days').format('YY. MM. DD');
            this.tomorrowBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
        }
    }

    public book() {
        // todo 서버로 예약 전송
        if ( this.selectedSection !== '' ) { // 선택한 섹션이 존재해야지 예약 가능
            console.log(this.selectedSection, sessionStorage.getItem('id'), this.selectedTime);
        }
    }
}
