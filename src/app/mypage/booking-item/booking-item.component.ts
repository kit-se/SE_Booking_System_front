import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss']
})
export class BookingItemComponent implements OnInit {
  @Input() bookingItem:any;
  timing:string;
  timeArray: number[];
  start: string;
  end: string;

  constructor() { }

  ngOnInit() {
    this.timeArray = [];
    this.timeArray = this.bookingItem.booking_time.split(', ');
    this.start = moment( moment(this.bookingItem.booking_date).add(this.timeArray[0], 'h') ).format('YYYY-MM-DD HH');
    this.end =  moment( moment(this.bookingItem.booking_date).add(this.timeArray[this.timeArray.length-1], 'h') ).format('YYYY-MM-DD HH');
  
    if(moment().isBefore(this.start)) {
      this.timing = 'before';
    } else if(moment().isAfter(this.end)){
      this.timing = 'after';
    } else{
      this.timing = 'now';
    }
  }
}
