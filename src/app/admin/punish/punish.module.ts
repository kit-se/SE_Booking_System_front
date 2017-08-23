import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { PunishService } from '../../shared/http/punish.service';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { PunishRoutingModule } from './punish-routing.module';
import { PunishComponent } from './punish.component';


@NgModule({
    imports: [
        CommonModule,
        PunishRoutingModule,
        FormsModule,

        NavbarModule,
        PaginationModule.forRoot()
    ],
    declarations: [PunishComponent],
    providers: [PunishService]
})
export class PunishModule {
}
