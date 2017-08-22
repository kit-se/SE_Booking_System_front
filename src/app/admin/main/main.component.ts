import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PunishService } from '../../shared/http/punish.service';
import { ReportService } from '../../shared/http/report.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    reportList$: Observable<any>;
    punishList$: Observable<any>;

    constructor (private reportService: ReportService, private punishService: PunishService) {
    }

    ngOnInit () {
        this.reportList$ = this.reportService.getReportList();
        this.punishList$ = this.punishService.getPunishList();
    }

}
