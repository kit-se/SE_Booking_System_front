import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ MainDashboardComponent ],
    exports: [ MainDashboardComponent ]
})
export class MainDashboardModule {
}
