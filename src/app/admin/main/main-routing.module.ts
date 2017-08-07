import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'report', loadChildren: 'app/admin/report/report.module#ReportModule' },
    { path: 'punish', loadChildren: 'app/admin/punish/punish.module#PunishModule' },
    { path: 'manage', loadChildren: 'app/admin/manage/manage.module#ManageModule' },
    { path: 'cancel', loadChildren: 'app/admin/cancel/cancel.module#CancelModule' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MainRoutingModule {
}
