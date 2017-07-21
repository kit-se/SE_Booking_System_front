import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: [ './usage-graph.component.scss' ]
})
export class UsageGraphComponent implements OnInit {
    @Input() title: string;
    timeTable = [];
    selectedTime = [];

    constructor (private router: Router) {
    }

    ngOnInit () {
        this.timeTable = new Array(24);
    }

    selectBookingTime ( time: number ) {
        this.timeTable[ time ] = true;
        this.selectedTime.push( time );
    }
}
