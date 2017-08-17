import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { BookingService } from '../shared/http/booking.service';
import { ReportService } from '../shared/http/report.service';

declare const $: any;

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {
    fileList: File[];
    previewList: any[];
    code: string;
    bookingList: Observable<any>;
    reportForm: FormGroup;

    constructor (private bookingService: BookingService,
                 private reportService: ReportService,
                 private fb: FormBuilder) {
    }

    ngOnInit () {
        this.fileList = [];
        this.previewList = [];

        // 유저와 관련된 예약 정보 중 오늘 아직 지나지 않은 시간에 대한 예약만 가져온다.
        const userId = sessionStorage.getItem('id');
        this.bookingList = this.bookingService.getBookingInfoListByUser(userId).map((bookingList, index) =>
            bookingList.filter(bookingItem => {
                const startTime = bookingItem.booking_time.split(', ')[0];
                bookingItem.booking_time = startTime;
                if ( this.isTomorrow(startTime) ) {
                    bookingItem.booking_date = moment(bookingItem.booking_date).add(1, 'd').format('YYYY-MM-DD');
                }

                // 오늘이나 내일 예약된 예약 중에
                if ( moment().isSame(bookingItem.booking_date, 'day') || moment().add(1, 'd').isSame(bookingItem.booking_date, 'day') ) {
                    // 아직 지나지 않은 시간 이면
                    // 16:00부터 예약일 시 16:10분까지는 신고할 수 있다.
                    const bookingDateTime = moment(bookingItem.booking_date).add(startTime, 'h').add(10, 'm');
                    if ( moment().isSameOrBefore(bookingDateTime) ) {
                        return true;
                    }
                }
                return false;
            })
        );

        // 신고 폼 init
        this.reportForm = this.fb.group({
            title: ['', [Validators.required]],
            time: ['', [Validators.required]]
        });


        // wysiwyg init
        $('#summernote').summernote({
            height: 300,
            toolbar: [
                ['fontsize', ['fontsize']],
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['insert', ['picture']],
                ['para', ['ul', 'ol']],
            ],
            callbacks: {
                onImageUpload: (files) => {
                    for ( let i = 0; i < files.length; i++ ) {
                        this.makePreview(files[i]);
                    }
                }
            }
        });
        // reset
        $('#summernote').summernote('code', '');
    }

    ngOnDestroy () {
        $('#summernote').summernote('destroy');
    }

    public submit () {
        if ( this.fileList.length === 0 ) {
            alert('현재 상황을 사진을 찍어 첨부해 주세요');
            return;
        }
        this.code = $('#summernote').summernote('code');
        let data = new FormData();
        data.append('title', this.reportForm.value.title);
        data.append('time', this.reportForm.value.time);
        data.append('contents', this.code);
        for ( let i = 0; i < this.fileList.length; i++ ) {
            data.append(`file_${i}`, this.fileList[i]);
        }

        this.reportService.postReport(data);
    }

    // 사진에 대한 데이터 스키마 생성, 파일리스트에 등록
    private makePreview (file: File) {
        const reader: FileReader = new FileReader();
        reader.addEventListener('load', () => {
            this.fileList.push(file);
            this.previewList.push(reader.result);
        });

        reader.readAsDataURL(file);
    }

    public deletePicture (index: number) {
        this.previewList.splice(index, 1);
        this.fileList.splice(index, 1);
    }

    private isTomorrow (start: number): boolean {
        if ( start < 6 ) {
            return true;
        } else {
            return false;
        }
    }
}
