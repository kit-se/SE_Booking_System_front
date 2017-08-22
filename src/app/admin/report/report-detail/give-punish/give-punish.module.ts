import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../../shared/http/admin.service';
import { PunishService } from '../../../../shared/http/punish.service';
import { GivePunishComponent } from './give-punish.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [ GivePunishComponent ],
    exports: [GivePunishComponent],
    providers: [PunishService, AdminService]
})
export class GivePunishModule {
}
