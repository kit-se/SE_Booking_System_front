import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportDetailModule } from './report-detail/report-detail.module';

@NgModule({
    imports: [
        CommonModule,
        ReportRoutingModule,

        ReportDetailModule,

        NavbarModule
    ],
    declarations: [ ReportComponent ]
})
export class ReportModule {
}
