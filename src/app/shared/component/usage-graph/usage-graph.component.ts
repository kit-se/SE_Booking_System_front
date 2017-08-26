import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-usage-graph',
    templateUrl: './usage-graph.component.html',
    styleUrls: ['./usage-graph.component.scss']
})
export class UsageGraphComponent implements OnInit, AfterContentChecked {
    @Output() selectedSection = new EventEmitter<string>(); // 이 섹션에서 예약 중임을 부모 컴포넌트에 알림
    @Output() selectedTimeOutput = new EventEmitter<number[]>(); // 예약 버튼 클릭시 현재까지 선택된 시간 배열을 부모 컴포넌트에 알림
    @Input() disabled: boolean; // 다른 섹션 예약 중일 때 예약 방지 목적
    @Input() section: any;
    @Input() bookingInfoList$: Observable<any>;
    @Input() needUpdate: boolean = false;
    bookedTimeTable: boolean[];
    timeTable: number[];
    bookingTable: boolean[]; // 전체 예약 테이블
    selectedTime: number[];

    constructor (private router: Router) {
    }

    ngOnInit () {
        // init variable.
        this.timeTable = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
        this.bookingTable = new Array(24);
        this.bookingTable.fill(false);
        this.bookedTimeTable = new Array(24);
        this.bookedTimeTable.fill(false);
        this.selectedTime = [];

        // 예약 현황
        this.loadBookedData();
    }

    ngAfterContentChecked () {
        if ( this.needUpdate ) {
            this.bookingTable = new Array(24);
            this.bookingTable.fill(false);
            this.bookedTimeTable = new Array(24);
            this.bookedTimeTable.fill(false);
            this.selectedTime = [];
            this.loadBookedData();
            this.needUpdate = false;
        }
    }

    public selectBookingTime (time: number) {
        let index: number = this.timeToIndex(time);

        if ( !this.bookedTimeTable[index] ) { // 클릭한 시간이 이미 예약된 시간이 아닐때
            if ( !this.disabled ) { // 다른 섹션에 예약 중이지 않을때
                if ( this.selectedTime.length === 0 ) { // 시작 시간 선택
                    this.book(index, time);
                } else { // 종료 시간 선택
                    if ( this.selectedTime.indexOf(time) === -1 ) { // 사용자가 이전에 선택한 시간이 아닐 경우
                        // 시작 시간
                        let start = this.selectedTime[0];
                        let startIndex = this.timeToIndex(start);

                        // 종료 시간    // 만약 종료시간을 아직 선택하지 않은 경우에는 시작 시간과 동일.
                        let end = this.selectedTime[this.selectedTime.length - 1];
                        let endIndex = this.timeToIndex(end);

                        // 사용자가 선택한 시간
                        let timeIndex = this.timeToIndex(time);

                        if ( timeIndex < startIndex ) { // 사용자가 선택한 시간이 start 보다 이른 경우
                            for ( let i = 0; i < (startIndex - timeIndex); i++ ) { // 사용자가 선택한 시간에서 시작 시간까지 예약시간 추가.
                                if ( !this.bookedTimeTable[timeIndex + i] ) { // 예약 되어 있지 않은 시간만 예약 시간에 추가.
                                    this.book(timeIndex + i, this.indexToTime(timeIndex + i));
                                } else {
                                    alert('이미 예약된 시간이 사이에 끼어 있습니다.');
                                    this.cancel();
                                    break;
                                }
                            }
                        } else if ( endIndex < timeIndex ) { // 사용자가 선택한 시간이 end 보다 늦은 경우
                            for ( let i = 1; i <= (timeIndex - endIndex); i++ ) {
                                if ( !this.bookedTimeTable[endIndex + i] ) {
                                    this.book(endIndex + i, this.indexToTime(endIndex + i));
                                } else {
                                    alert('이미 예약된 시간이 사이에 끼어 있습니다.');
                                    this.cancel();
                                    break;
                                }
                            }
                        }
                    } else { // 사용자가 선택한 시간을 다시 선택하면 취소.
                        this.cancel();
                    }
                }
            }
        }

        // 선택된, 취소된 예약 시간을 정리해서 상위 컴포넌트로 보냄
        this.selectedTime = this.selectedTime.filter((x, index) => this.selectedTime.indexOf(x) === index);
        this.selectedTimeOutput.emit(this.selectedTime);
    }

    private timeToIndex (time: number): number { // 시간 타일에 해당되는 배열의 index 값을 맞춰줌. 6시 = 0, 0시는 18.
        let index;
        time > 5 ? index = time - 6 : index = time + 18;
        return index;
    }

    private indexToTime (index: number): number {
        let time;
        index > 17 ? time = index - 18 : time = index + 6;
        return time;
    }

    private book (index: number, time: number) {
        this.bookingTable[index] = true;
        this.selectedTime.push(time);
        this.selectedSection.emit(this.section.id); // 예약 성공시 섹션 동결
    }

    private cancel () {
        this.bookingTable = this.bookedTimeTable.slice(0);
        this.selectedTime = [];
        this.selectedSection.emit('');
    }

    private loadBookedData () {
        this.bookingInfoList$
            .map(list => list.filter(item => item.section === this.section.name)) // 현재 위치한 섹션에 대한 정보만 가져옴
            .subscribe(list => {
                for ( let i = 0; i < list.length; i++ ) {
                    let timeList = list[i].booking_time.split(', '); // '12, 13, 14' -> ['12', '13', '14']
                    for ( let j = 0; j < timeList.length; j++ ) {
                        let index = this.timeToIndex(+timeList[j]); // '12' -> 12 -> 6
                        this.bookedTimeTable[index] = true;
                        this.bookingTable = this.bookedTimeTable.slice(0); // 예약된 곳에 색칠
                    }
                }
            });
    }
}
