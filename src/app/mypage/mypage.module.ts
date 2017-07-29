import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';
import { NavbarModule } from "app/shared/component/navbar/navbar.module";

@NgModule({
  imports: [
    CommonModule,
    MypageRoutingModule,

    NavbarModule
  ],
  declarations: [MypageComponent]
})
export class MypageModule { }
