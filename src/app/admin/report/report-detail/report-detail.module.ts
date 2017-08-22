import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportService } from '../../../shared/http/report.service';
import { NavbarModule } from '../../shared/component/navbar/navbar.module';
import { GivePunishModule } from './give-punish/give-punish.module';
import { ReportDetailComponent } from './report-detail.component';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        GivePunishModule
    ],
    declarations: [ReportDetailComponent],
    providers: [ReportService]
})
export class ReportDetailModule {
}
