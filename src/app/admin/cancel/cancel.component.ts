import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../../shared/http/booking.service';

@Component({
    selector: 'app-cancel',
    templateUrl: './cancel.component.html',
    styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {
    filteredBookingList$: Observable<any>;
    currentPage: number;
    itemPerPage: number;

    constructor (private bookingService: BookingService) {
    }

    ngOnInit () {
        this.filteredBookingList$ =
            this.bookingService.getBookingList()
                .map((list: any[]) => list.filter(item => (item.changer !== item.booker || item.changer === null)))
                .map((list: any[]) => list.filter(item => item.booking_date === moment().format('YYYY-MM-DD')))
                .map((list: any[]) => list.filter(item => {
                    let booking_time = item.booking_time.split(', ');
                    let now = moment().format('HH');
                    return +booking_time[0] <= +now && +now <= +booking_time[booking_time.length - 1];
                }).reverse());
        this.currentPage = 1;
        this.itemPerPage = 30;
    }

}
