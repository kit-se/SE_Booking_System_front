import { Observable } from 'rxjs/Rx';
import { BookingService } from '../shared/http/booking.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})

export class MypageComponent implements OnInit {
  isBefore:boolean;
  bookingList:Observable<any>;
  id:string;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.isBefore = moment().isBefore('2017-08-02');
    this.id = sessionStorage.getItem('id');
    this.bookingList = this.bookingService.getBookingInfoListByUser(this.id);
  }

}

