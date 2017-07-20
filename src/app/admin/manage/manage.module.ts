import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';

@NgModule({
    imports: [
        CommonModule,
        ManageRoutingModule,

        NavbarModule
    ],
    declarations: [ ManageComponent ]
})
export class ManageModule {
}
