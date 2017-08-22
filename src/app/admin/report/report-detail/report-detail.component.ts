import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../../shared/http/report.service';

@Component({
    selector: 'app-report-detail',
    templateUrl: './report-detail.component.html',
    styleUrls: [ './report-detail.component.scss' ]
})
export class ReportDetailComponent implements OnInit {
    id: number;
    title: string;
    content: string;
    suspect: string;
    reportPicList: string[];

    constructor (private reportService: ReportService, private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.id = this.route.snapshot.params.id;
        this.reportPicList = [];
        this.reportService.getReportById(this.id).subscribe(list => {
            this.title = list[0].title;
            this.content = list[0].content;
            this.suspect = list[0].prebooker;
            for ( let i = 0; i < list.length; i++ ) {
                this.reportPicList.push(list[i].url);
            }
        });
    }

}
