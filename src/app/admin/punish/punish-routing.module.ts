import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunishComponent } from './punish.component';

const routes: Routes = [
    { path: '', component: PunishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunishRoutingModule { }
