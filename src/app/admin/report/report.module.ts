import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ReportDetailModule } from './report-detail/report-detail.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        CommonModule,
        ReportRoutingModule,

        ReportDetailModule,

        NavbarModule,
        PaginationModule.forRoot()
    ],
    declarations: [ ReportComponent ]
})
export class ReportModule {
}
