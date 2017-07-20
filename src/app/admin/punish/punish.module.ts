import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PunishRoutingModule } from './punish-routing.module';
import { PunishComponent } from './punish.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';


@NgModule({
    imports: [
        CommonModule,
        PunishRoutingModule,

        NavbarModule
    ],
    declarations: [ PunishComponent ]
})
export class PunishModule {
}
