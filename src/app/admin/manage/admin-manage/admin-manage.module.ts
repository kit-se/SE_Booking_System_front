import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManageComponent } from './admin-manage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminManageComponent],
    exports: [AdminManageComponent]
})
export class AdminManageModule { }
