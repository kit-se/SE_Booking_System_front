import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { BookingService } from '../shared/http/booking.service';
import { ReportService } from '../shared/http/report.service';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        CommonModule,
        ReportRoutingModule,
        ReactiveFormsModule,
        NavbarModule
    ],
    declarations: [ReportComponent],
    providers: [BookingService, ReportService]
})
export class ReportModule {
}
