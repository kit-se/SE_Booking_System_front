import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { AdminManageModule } from './admin-manage/admin-manage.module';
import { SectionManageModule } from './section-manage/section-manage.module';

@NgModule({
    imports: [
        CommonModule,
        ManageRoutingModule,

        NavbarModule,
        AdminManageModule,
        SectionManageModule
    ],
    declarations: [ ManageComponent ]
})
export class ManageModule {
}
