import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';

const routes: Routes = [
    { path: '', component: ReportComponent },
    { path: ':id', component: ReportDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
