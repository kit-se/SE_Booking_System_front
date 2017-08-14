import { BookingItemComponent } from './booking-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookingItemComponent],
  exports: [BookingItemComponent]
})
export class BookingItemModule { }
