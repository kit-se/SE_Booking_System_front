import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {NavbarModule} from '../shared/component/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,

    NavbarModule
  ],
  declarations: [MainComponent]
})
export class MainModule {
}
