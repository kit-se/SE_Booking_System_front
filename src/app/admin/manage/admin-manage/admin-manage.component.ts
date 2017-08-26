import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AdminService } from '../../../shared/http/admin.service';

@Component({
    selector: 'app-admin-manage',
    templateUrl: './admin-manage.component.html',
    styleUrls: [ './admin-manage.component.scss' ]
})
export class AdminManageComponent implements OnInit {
    isAdding: boolean;
    adminForm: FormGroup;
    adminList$: Observable<any>;

    constructor (private adminService: AdminService, private fb: FormBuilder) {
    }

    ngOnInit () {
        this.adminForm = this.fb.group({
            credit: ['', [Validators.required]],
            name: ['', [Validators.required]],
            position: ['', [Validators.required]]
        });
        this.isAdding = false;
        this.adminList$ = this.adminService.getAdminList();
    }

    public addAdmin (data: any) {
        if ( data.credit !== '' && data.name !== '' ) {
            this.adminService.postAdmin(data).subscribe(() => {
                this.adminList$ = this.adminService.getAdminList();
            });
            this.adminForm.reset();
            this.isAdding = false;
        }
    }

    public deleteAdmin (id: number) {
        this.adminService.deleteAdmin(id).subscribe(() => {
            this.adminList$ = this.adminService.getAdminList();
        })
    }
}
