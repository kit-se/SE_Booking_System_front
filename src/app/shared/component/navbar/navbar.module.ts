import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ReactiveFormsModule } from '@angular/forms';

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
