import { Observable } from 'rxjs/Rx';
import { BookingService } from '../shared/http/booking.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})

export class MypageComponent implements OnInit {
  bookingList:Observable<any>;
  id:string;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('id');
    this.bookingList = this.bookingService.getBookingInfoListByUser(this.id);
  }

}

