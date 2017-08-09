import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsageGraphModule } from '../../shared/component/usage-graph/usage-graph.module';
import { BookingService } from '../../shared/http/booking.service';
import { SectionService } from '../../shared/http/section.service';
import { MainDashboardComponent } from './main-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        UsageGraphModule
    ],
    declarations: [MainDashboardComponent],
    exports: [MainDashboardComponent],
    providers: [SectionService, BookingService]
})
export class MainDashboardModule {
}
