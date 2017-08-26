import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReportService } from '../../shared/http/report.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    reportList$: Observable<any>;
    currentPage: number;
    itemPerPage: number;

    constructor (private reportService: ReportService) {
    }

    ngOnInit () {
        this.reportList$ = this.reportService.getReportList();
        this.itemPerPage = 30;
        this.currentPage = 1;
    }
}
