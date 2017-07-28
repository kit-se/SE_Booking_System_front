import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestWysiwygComponent } from './test-wysiwyg.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule
    ],
    declarations: [ TestWysiwygComponent ]
})
export class TestWysiwygModule {
}
