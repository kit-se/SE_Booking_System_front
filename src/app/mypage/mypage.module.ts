import { BookingItemModule } from './booking-item/booking-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';
import { NavbarModule } from "app/shared/component/navbar/navbar.module";

@NgModule({
  imports: [
    CommonModule,
    MypageRoutingModule,
    NavbarModule,
    BookingItemModule
  ],
  declarations: [MypageComponent]
})
export class MypageModule { }
