import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

import { DevRoutingModule } from './dev-routing.module';
import { DevComponent } from './dev.component';

@NgModule({
    imports: [
        CommonModule,
        DevRoutingModule,
        NavbarModule
    ],
    declarations: [ DevComponent ]
})
export class DevModule {
}
