import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionService } from '../../../shared/http/section.service';
import { SectionManageComponent } from './section-manage.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ SectionManageComponent ],
    exports: [SectionManageComponent],
    providers: [SectionService]
})
export class SectionManageModule {
}
