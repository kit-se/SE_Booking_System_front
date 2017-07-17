import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsageGraphComponent } from './usage-graph.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ UsageGraphComponent ],
    exports: [ UsageGraphComponent ]
})
export class UsageGraphModule {
}
