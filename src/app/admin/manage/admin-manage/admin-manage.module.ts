import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../shared/http/admin.service';
import { AdminManageComponent } from './admin-manage.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [AdminManageComponent],
    exports: [AdminManageComponent],
    providers: [AdminService]
})
export class AdminManageModule {
}
