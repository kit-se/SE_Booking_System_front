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

    public deleteSection() {
        // todo 삭제할 섹션 id 받아와야함
        // todo 삭제 데이터 서버로 전송
    }
}
