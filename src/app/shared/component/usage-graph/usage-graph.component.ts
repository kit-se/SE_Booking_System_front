import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: [ './usage-graph.component.scss' ]
})
export class UsageGraphComponent implements OnInit {
    @Output() selectedSection = new EventEmitter<string>(); // 이 섹션에서 예약 중임을 부모 컴포넌트에 알림
    @Output() selectedTimeOutput = new EventEmitter<number[]>(); // 예약 버튼 클릭시 현재까지 선택된 시간 배열을 부모 컴포넌트에 알림
    @Input() disabled: boolean; // 다른 섹션 예약 중일 때 예약 방지 목적
    @Input() section: string;
    timeTable: boolean[] = []; // 전체 시간 테이블
    bookedTimeTable: boolean[] = []; // 예약된 시간 테이블
    selectedTime: number[] = [];

    constructor (private router: Router) {
    }

    ngOnInit () {
        // init variable.
        this.timeTable = new Array(24);
        this.timeTable.fill( false );

        // todo 서버에서 예약된 데이터를 불러오기
        if ( this.section === 'A1') {
            this.bookedTimeTable = [ false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false ];
            this.timeTable = this.bookedTimeTable.slice(0); // 일반 복사를 수행하면 참조값이 넘어가기 때문에 깊은 복사를 수행한다.
        } else if ( this.section === 'B1' ) {
            this.bookedTimeTable = [ false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
            this.timeTable = this.bookedTimeTable.slice(0);
        }
    }

    selectBookingTime (time: number) {
        if ( !this.disabled ) { // 다른 섹션을 예약 중이지 않을 때
            if ( this.selectedTime.length === 0 ) { // 첫 시간을 클릭할 때 다른 섹션 예약 방지
                this.selectedSection.emit(this.section);
            }
            if ( this.timeTable[ time ] ) { // 시간 선택 취소
                if ( !this.bookedTimeTable[ time ] ) { // 내가 선택한 시간이라면,
                    this.timeTable[ time ] = false;
                    this.selectedTime.splice( this.selectedTime.indexOf(time), 1); // time 찾아서 삭제.
                    if ( this.selectedTime.length === 0 ) { // 취소해서 시간이 모두 없어지면 다른 섹션에 예약 할 수 있도록 함.
                        this.selectedSection.emit('');
                    }
                }
            } else { // 시간 선택
                this.timeTable[ time ] = true;
                this.selectedTime.push(time);
                this.selectedTimeOutput.emit( this.selectedTime );
            }
        }
    }
}
