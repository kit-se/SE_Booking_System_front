import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionManageComponent } from './section-manage.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ SectionManageComponent ],
    exports: [ SectionManageComponent ]
})
export class SectionManageModule {
}
