import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: ['./usage-graph.component.scss']
})
export class UsageGraphComponent implements OnInit {
    @Output() selectedSection = new EventEmitter<string>(); // 이 섹션에서 예약 중임을 부모 컴포넌트에 알림
    @Output() selectedTimeOutput = new EventEmitter<number[]>(); // 예약 버튼 클릭시 현재까지 선택된 시간 배열을 부모 컴포넌트에 알림
    @Input() disabled: boolean; // 다른 섹션 예약 중일 때 예약 방지 목적
    @Input() section: string;
    timeTable: number[] = [];
    bookingTable: boolean[] = []; // 전체 예약 테이블
    bookedTimeTable: boolean[] = []; // 예약된 시간 테이블
    selectedTime: number[] = [];

    constructor (private router: Router) {
    }

    ngOnInit () {
        // init variable.
        this.timeTable = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
        this.bookingTable = new Array(24);
        this.bookingTable.fill(false);

        // todo 서버에서 예약된 데이터를 불러오기
        if ( this.section === 'A1' ) {
            this.bookedTimeTable = [false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false];
            this.bookingTable = this.bookedTimeTable.slice(0); // 일반 복사를 수행하면 참조값이 넘어가기 때문에 깊은 복사를 수행한다.
        } else if ( this.section === 'B1' ) {
            this.bookedTimeTable = [false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
            this.bookingTable = this.bookedTimeTable.slice(0);
        }
    }

    public selectBookingTime (time: number) {
        let index: number = this.timeToIndex(time);

        if ( !this.disabled ) { // 다른 섹션에 예약 중이지 않을때
            if ( !this.bookingTable[index] ) { // 예약
                if ( this.selectedTime.length === 0 ) { // 시작 시간 선택
                    this.book(index, time);
                } else { // 종료 시간 선택
                    let start = this.selectedTime[0];
                    let end = time;
                    let startIndex = this.timeToIndex(start);
                    let endIndex = this.timeToIndex(end);

                    if ( startIndex > endIndex ) { // 시작 시간이 종료 시간보다 클 때 시작시간과 종료시간을 바꿈
                        let temp = endIndex;
                        endIndex = startIndex;
                        startIndex = temp;

                        temp = end;
                        end = start;
                        start = temp;
                    }

                    this.bookingTable.fill(true, startIndex, endIndex + 1); // 선택한 시간 뷰에 표시

                }
            } else { // 취소
                if ( !this.bookedTimeTable[index] ) { // 다른 사람이 예약 중인 시간이 아니면
                    this.cancel(index, time);
                }
            }
        }
    }

    private timeToIndex (time: number): number { // 시간 타일에 해당되는 배열의 index 값을 맞춰줌. 6시 = 0, 0시는 18.
        let index;
        time > 5 ? index = time - 6 : index = time + 18;
        return index;
    }

    private book (index: number, time: number) {
        this.bookingTable[index] = true;
        this.selectedTime.push(time);
        this.selectedTimeOutput.emit(this.selectedTime);
        this.selectedSection.emit(this.section); // 예약 성공시 섹션 동결
    }

    private cancel (index: number, time: number) {
        this.bookingTable[index] = false;
        this.selectedTime.splice(this.selectedTime.indexOf(time), 1); // time 찾아서 삭제.
        if ( this.selectedTime.length === 0 ) { // 취소해서 시간이 모두 없어지면 다른 섹션에 예약 할 수 있도록 함.
            this.selectedSection.emit('');
        }
    }
}
