import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { BookingService } from '../../shared/http/booking.service';

@Component({
    selector: 'app-booking-item',
    templateUrl: './booking-item.component.html',
    styleUrls: ['./booking-item.component.scss']
})
export class BookingItemComponent implements OnInit {
    @Input() bookingItem: any;
    @Output() needUpdateOutput = new EventEmitter<boolean>();
    @Input() needUpdate: boolean;
    timing: string;
    timeArray: number[];
    start: string;
    end: string;

    changeTime: string;
    changeTimeArray: string[];

    constructor (private bookingService: BookingService) {
    }

    ngOnInit () {
        this.timeArray = this.bookingItem.booking_time.split(', ');
        if ( this.isTomorrow(this.timeArray[0]) ) {
            this.bookingItem.booking_date = moment(this.bookingItem.booking_date).add(1, 'd').format('YYYY-MM-DD');
        }
        this.start = moment(moment(this.bookingItem.booking_date).add(this.timeArray[0], 'h')).format('YYYY-MM-DD HH');
        this.end = moment(moment(this.bookingItem.booking_date).add(this.timeArray[this.timeArray.length - 1], 'h')).format('YYYY-MM-DD HH');

        if ( moment().isBefore(this.start) ) {
            this.timing = 'before';
        } else if ( moment().isAfter(this.end) ) {
            this.timing = 'after';
        } else {
            this.timing = 'now';
        }

        this.changeTime = '';
    }

    public cancel (bookingId: number) {
        this.bookingService.cancel(bookingId, sessionStorage.getItem('id')).subscribe((res: any) => {
            if ( res.status === 'success' ) {
                this.needUpdate = true;
                this.needUpdateOutput.emit(this.needUpdate);
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    public endBooking (bookingId: number) {
        this.changeTimeArray = this.bookingItem.booking_time.split(', ');
        for ( let i = 0; i < this.changeTimeArray.length; i++ ) {
            if ( +this.changeTimeArray[i] <= +moment().format('HH') ) {
                if ( i == 0 ) {
                    this.changeTime += this.changeTimeArray[i];
                } else {
                    this.changeTime += ', ';
                    this.changeTime += this.changeTimeArray[i];
                }
            }
        }
        this.bookingItem.change_time = this.changeTime;

        this.bookingService.end(bookingId, sessionStorage.getItem('id'), this.bookingItem.change_time).subscribe((res: any) => {
            if ( res.status === 'success' ) {
                this.needUpdate = true;
                this.needUpdateOutput.emit(this.needUpdate);
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    private isTomorrow (start: number): boolean {
        if ( start < 6 ) {
            return true;
        } else {
            return false;
        }
    }
}
