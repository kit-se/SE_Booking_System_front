import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GivePunishComponent } from './give-punish.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [ GivePunishComponent ],
    exports: [ GivePunishComponent ]
})
export class GivePunishModule {
}
