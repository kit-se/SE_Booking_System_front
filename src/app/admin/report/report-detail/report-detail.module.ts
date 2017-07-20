import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../../shared/component/navbar/navbar.module';
import { ReportDetailComponent } from './report-detail.component';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule
    ],
    declarations: [ ReportDetailComponent ]
})
export class ReportDetailModule {
}
