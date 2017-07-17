import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { MainComponent } from './main.component';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        NavbarModule,
        MainDashboardModule
    ],
    declarations: [ MainComponent ]
})
export class MainModule {
}
