import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../../../shared/http/booking.service';

@Component({
    selector: 'app-cancel-detail',
    templateUrl: './cancel-detail.component.html',
    styleUrls: ['./cancel-detail.component.scss']
})
export class CancelDetailComponent implements OnInit {
    id: number;
    cancelTarget$: Observable<any>;

    constructor (private router: Router, private route: ActivatedRoute, private bookingService: BookingService) {
    }

    ngOnInit () {
        this.id = this.route.snapshot.params.id;
        this.cancelTarget$ = this.bookingService.getBookingInfoById(this.id).map(list => list[0]);
    }

    public end (id: number, time: string) {
        let targetTime = time.split(', ');

        let changeTime = '';
        for ( let i = 0; i < targetTime.length; i++ ) {
            if ( +targetTime[i] <= +moment().format('HH') ) {
                if ( i == 0 ) {
                    changeTime += targetTime[i];
                } else {
                    changeTime += ', ';
                    changeTime += targetTime[i];
                }
            }
        }

        this.bookingService.end(this.id, sessionStorage.getItem('id'), changeTime).subscribe((res: any) => {
            if ( res.status === 'success' ) {
                this.router.navigate(['/admin/cancel']);
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }
}
