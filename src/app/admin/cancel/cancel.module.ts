import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { CancelRoutingModule } from './cancel-routing.module';
import { CancelComponent } from './cancel.component';

@NgModule({
    imports: [
        CommonModule,
        CancelRoutingModule,

        NavbarModule,
        PaginationModule.forRoot()
    ],
    declarations: [ CancelComponent ]
})
export class CancelModule {
}
