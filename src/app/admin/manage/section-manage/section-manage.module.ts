import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionService } from '../../../shared/http/section.service';
import { SectionManageComponent } from './section-manage.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [ SectionManageComponent ],
    exports: [SectionManageComponent],
    providers: [SectionService]
})
export class SectionManageModule {
}
