import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { MainComponent } from './main.component';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';

@NgModule({
    imports: [
        CommonModule,

        NavbarModule,
        MainDashboardModule
    ],
    declarations: [ MainComponent ]
})
export class MainModule {
}
