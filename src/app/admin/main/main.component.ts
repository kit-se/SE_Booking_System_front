import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../../shared/http/booking.service';
import { PunishService } from '../../shared/http/punish.service';
import { ReportService } from '../../shared/http/report.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    reportList$: Observable<any>;
    punishList$: Observable<any>;
    cancelList$: Observable<any>;

    constructor (private reportService: ReportService, private punishService: PunishService, private bookingService: BookingService) {
    }

    ngOnInit () {
        this.reportList$ = this.reportService.getReportList();
        this.punishList$ = this.punishService.getPunishList();
        this.cancelList$ =
            this.bookingService.getBookingList()
                .map((list: any[]) => list.filter(item => item.changer === null))
                .map((list: any[]) => list.filter(item => item.booking_date === moment().format('YYYY-MM-DD')))
                .map((list: any[]) => list.filter(item => {
                    let booking_time = item.booking_time.split(', ');
                    let now = moment().format('HH');
                    return +booking_time[0] <= +now && +now <= +booking_time[booking_time.length - 1];
                }).reverse());
    }

}
