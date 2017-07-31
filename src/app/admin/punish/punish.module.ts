import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { PunishRoutingModule } from './punish-routing.module';
import { PunishComponent } from './punish.component';


@NgModule({
    imports: [
        CommonModule,
        PunishRoutingModule,

        NavbarModule,
        PaginationModule.forRoot()
    ],
    declarations: [ PunishComponent ]
})
export class PunishModule {
}
