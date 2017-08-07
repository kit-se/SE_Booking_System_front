import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ FooterComponent ],
    exports: [ FooterComponent ]
})
export class FooterModule {
}
