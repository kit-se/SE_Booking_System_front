import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { BookingService } from '../../shared/http/booking.service';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { CancelDetailModule } from './cancel-detail/cancel-detail.module';

import { CancelRoutingModule } from './cancel-routing.module';
import { CancelComponent } from './cancel.component';

@NgModule({
    imports: [
        CommonModule,
        CancelRoutingModule,
        FormsModule,

        NavbarModule,
        CancelDetailModule,
        PaginationModule.forRoot()
    ],
    declarations: [CancelComponent],
    providers: [BookingService]
})
export class CancelModule {
}
