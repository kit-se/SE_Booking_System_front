import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../../shared/component/navbar/navbar.module';
import { ReportDetailComponent } from './report-detail.component';
import { GivePunishModule } from './give-punish/give-punish.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        GivePunishModule
    ],
    declarations: [ ReportDetailComponent ]
})
export class ReportDetailModule {
}
