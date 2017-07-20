import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: [ './usage-graph.component.scss' ]
})
export class UsageGraphComponent implements OnInit {
    @Input() title: string;
    timeTable: Array<boolean>;


    constructor (private router: Router) {
    }

    ngOnInit () {
        this.timeTable = new Array(12);
        for ( let i = 0; i < this.timeTable.length; i++ ) {
            if( i === 7 || i === 8 || i === 9 ) {
                this.timeTable[i] = true; // true 는 이미 예약된 시간이라는 뜻.
            }
        }
    }
}
