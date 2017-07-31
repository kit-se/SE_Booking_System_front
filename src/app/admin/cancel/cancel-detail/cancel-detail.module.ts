import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../shared/component/navbar/navbar.module';
import { CancelDetailComponent } from './cancel-detail.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NavbarModule
    ],
    declarations: [ CancelDetailComponent ]
})
export class CancelDetailModule {
}
