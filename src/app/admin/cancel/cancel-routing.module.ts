import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelDetailComponent } from './cancel-detail/cancel-detail.component';
import { CancelComponent } from './cancel.component';

const routes: Routes = [
    { path: '', component: CancelComponent },
    { path: ':id', component: CancelDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CancelRoutingModule {
}
