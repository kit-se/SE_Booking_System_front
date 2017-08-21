import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SectionService } from '../../../shared/http/section.service';

@Component({
    selector: 'app-section-manage',
    templateUrl: './section-manage.component.html',
    styleUrls: [ './section-manage.component.scss' ]
})
export class SectionManageComponent implements OnInit {
    isAdding: boolean;
    layoutFile: File;
    layoutUrl$: Observable<any>;

    constructor (private sectionService: SectionService) {
    }

    ngOnInit () {
        this.isAdding = false;
        this.layoutUrl$ = this.sectionService.getLayout().map(result => result.url);
    }

    public addSection () {
        // todo 섹션 디비에 추가
        this.isAdding = false;
    }

    public deleteSection () {
        // todo 삭제할 섹션 id 받아와야함
        // todo 삭제 데이터 서버로 전송
    }

    public postLayout () {
        const data = new FormData();
        data.append('layout_file', this.layoutFile);
        this.sectionService.postLayout(data).subscribe(result => {
            this.layoutUrl$ = this.sectionService.getLayout().map(result => result.url);
        });
    }
}
