import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard.component';
import { UsageGraphModule } from '../../shared/component/usage-graph/usage-graph.module';

@NgModule({
    imports: [
        CommonModule,
        UsageGraphModule
    ],
    declarations: [ MainDashboardComponent ],
    exports: [ MainDashboardComponent ]
})
export class MainDashboardModule {
}
