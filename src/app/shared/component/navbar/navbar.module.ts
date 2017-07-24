import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../http/login.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ],
    providers: [ LoginService ]
})
export class NavbarModule {
}
