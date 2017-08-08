import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
    { path: 'main', component: MainComponent },
    { path: 'admin', loadChildren: 'app/admin/main/main.module#MainModule' },
    { path: 'report', loadChildren: 'app/report/report.module#ReportModule' },
    { path: 'dev', loadChildren: 'app/dev/dev.module#DevModule' },
    { path: 'mypage', loadChildren: 'app/mypage/mypage.module#MypageModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
