import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: [ './usage-graph.component.scss' ]
})
export class UsageGraphComponent implements OnInit {
    @Output() selected = new EventEmitter<string>();
    @Input() title: string;
    @Input() disabled: boolean;
    timeTable = [];
    selectedTime = [];

    constructor (private router: Router) {
    }

    ngOnInit () {
        this.timeTable = new Array(24);
    }

    selectBookingTime (time: number) {
        if ( this.disabled ) {
            return;
        }
        if ( this.selectedTime.length === 0 ) { // 처음 시간을 선택하는 경우
            this.selected.emit(this.title);
        }
        if ( this.timeTable[ time ] ) {
            this.timeTable[ time ] = false;
            this.selectedTime.splice( this.selectedTime.indexOf(time), 1); // time 찾아서 삭제.
        } else {
            this.timeTable[ time ] = true;
            this.selectedTime.push(time);
        }
    }
}
