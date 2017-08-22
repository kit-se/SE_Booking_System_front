import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PunishService } from '../../shared/http/punish.service';
import { ReportService } from '../../shared/http/report.service';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,

        NavbarModule
    ],
    declarations: [MainComponent],
    providers: [ReportService, PunishService]
})
export class MainModule {
}
