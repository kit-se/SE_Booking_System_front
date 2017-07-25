import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-manage',
    templateUrl: './section-manage.component.html',
    styleUrls: [ './section-manage.component.scss' ]
})
export class SectionManageComponent implements OnInit {
    isAdding: boolean;

    constructor () {
    }

    ngOnInit () {
        this.isAdding = false;
    }

    public addSection() {
        // todo 섹션 디비에 추가
        this.isAdding = false;
    }
}
