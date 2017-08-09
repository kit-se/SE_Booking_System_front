import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
    // 예약 일자 관련 변수
    dateFlag: string;
    date: string;
    // 섹션 관련 변수
    selectedSection: string;
    // 예약 시간 관련 변수
    bookingInfoList: any[];
    selectedTime: number[];

    constructor () {
    }

    ngOnInit () {
        this.dateFlag = 'today';
        this.date = moment().format('YY. MM. DD');

        this.selectedSection = '';

        // 서버에서 오늘, 내일에 대한 예약 정보를 모두 불러온다
        // todo 오늘, 내일에 대한 예약 정보를 분리해서, 해당 날짜 클릭시에 데이터를 바꿔준다.
        this.bookingInfoList = [
            {
                section: 'A1',
                date: moment().format('YYYY-MM-DD'),
                bookedTime: [false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]
            },
            {
                section: 'A2',
                date: moment().format('YYYY-MM-DD'),
                bookedTime: [false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]
            },
            {
                section: 'A3',
                date: moment().format('YYYY-MM-DD'),
                bookedTime: [false, false, true, true, true, true, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]
            },
            {
                section: 'B1',
                date: moment().format('YYYY-MM-DD'),
                bookedTime: [false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false]
            },
            {
                section: 'B2',
                date: moment().format('YYYY-MM-DD'),
                bookedTime: [false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]
            }
        ]
    }

    public switchDate (date: string) {
        this.dateFlag = date;
        if ( this.dateFlag === 'today' ) {
            this.date = moment().format('YY. MM. DD');
        } else if ( this.dateFlag === 'tomorrow' ) {
            this.date = moment().add(1, 'days').format('YY. MM. DD');
        }
    }

    public book () {
        // todo 서버로 예약 전송
        if ( this.selectedSection !== '' ) { // 선택한 섹션이 존재해야지 예약 가능
            console.log(this.selectedSection, sessionStorage.getItem('id'), this.selectedTime);
        }
    }
}
