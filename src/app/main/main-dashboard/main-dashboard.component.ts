import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../../shared/http/booking.service';
import { SectionService } from '../../shared/http/section.service';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
    // 예약 일자 관련 변수
    dateFlag: string;
    date: string;
    sectionList$: Observable<any>;
    selectedSection: string;
    todayBookingInfoList$: Observable<any>;
    tomorrowBookingInfoList$: Observable<any>;
    selectedTime: number[];
    needUpdate: boolean;

    constructor (private sectionService: SectionService, private bookingService: BookingService, private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit () {
        this.dateFlag = 'today';
        this.date = moment().format('YY. MM. DD');
        this.sectionList$ = this.sectionService.getSectionList();
        this.selectedSection = '';
        this.todayBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
        this.needUpdate = false;
    }

    public switchDate (date: string) {
        this.dateFlag = date;
        if ( this.dateFlag === 'today' ) {
            this.date = moment().format('YY. MM. DD');
            this.todayBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
            this.selectedSection = ''
        } else if ( this.dateFlag === 'tomorrow' ) {
            this.date = moment().add(1, 'days').format('YY. MM. DD');
            this.tomorrowBookingInfoList$ = this.bookingService.getBookingInfoList(this.dateFlag).shareReplay();
            this.selectedSection = ''
        }
    }

    public book() {
        this.needUpdate = false;
        if ( this.selectedSection !== '' ) { // 선택한 섹션이 존재해야지 예약 가능
            if ( sessionStorage.getItem('id') === null ) {
                alert('로그인 후 예약이 가능합니다.');
            } else {
                let bookingTimeString: string = '';
                for ( let i = 0; i < this.selectedTime.length - 1; i++ ) { // [12, 13, 14] -> '12, 13, '
                    bookingTimeString = bookingTimeString + this.selectedTime[i] + ', ';
                }
                bookingTimeString = bookingTimeString + this.selectedTime[this.selectedTime.length - 1]; // '12, 13, ' -> '12, 13, 14'

                let booking_date;
                this.dateFlag === 'today' ? booking_date = moment().format('YYYY-MM-DD') : booking_date = moment().add(1, 'd').format('YYYY-MM-DD');

                const bookingData = {
                    booker: sessionStorage.getItem('id'),
                    booking_time: bookingTimeString,
                    booking_date: booking_date,
                    section: this.selectedSection
                };

                this.bookingService.book(bookingData).subscribe((res: any) => {
                    if ( res !== 'insert success' ) {
                        alert('이미 예약된 시간이 포함되어있습니다. 다시 시도해주세요');
                        this.switchDate(this.dateFlag);
                    }
                    this.switchDate(this.dateFlag);
                    this.needUpdate = true;
                });
            }
        }
    }
}
