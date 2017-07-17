import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: [ './main-dashboard.component.scss' ]
})
export class MainDashboardComponent implements OnInit {
    dateFlag: string;
    date: string;

    constructor () {
    }

    ngOnInit () {
        this.dateFlag = 'today';
        this.date = moment().format('YYYY-MM-DD');
    }

    public switchDate( date: string ) {
        this.dateFlag = date;
        if ( this.dateFlag === 'today' ) {
            this.date = moment().format('YYYY-MM-DD');
        } else if ( this.dateFlag === 'tomorrow' ) {
            this.date = moment().add(1, 'days').format('YYYY-MM-DD');
        }
    }
}
