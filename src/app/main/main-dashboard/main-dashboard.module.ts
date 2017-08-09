import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsageGraphModule } from '../../shared/component/usage-graph/usage-graph.module';
import { SectionService } from '../../shared/http/section.service';
import { MainDashboardComponent } from './main-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        UsageGraphModule
    ],
    declarations: [MainDashboardComponent],
    exports: [MainDashboardComponent],
    providers: [SectionService]
})
export class MainDashboardModule {
}
