import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-manage',
    templateUrl: './admin-manage.component.html',
    styleUrls: [ './admin-manage.component.scss' ]
})
export class AdminManageComponent implements OnInit {
    isAdding: boolean;

    constructor () {
    }

    ngOnInit () {
        this.isAdding = false;
    }

    public addAdmin() {
        // todo 서버로 관리자 전송
        this.isAdding = false;
    }
}
