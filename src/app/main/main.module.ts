import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        CommonModule,

        NavbarModule
    ],
    declarations: [ MainComponent ]
})
export class MainModule {
}
