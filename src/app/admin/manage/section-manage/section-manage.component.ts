import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    sectionList$: Observable<any>;

    constructor (private sectionService: SectionService, private fb: FormBuilder) {
    }

    ngOnInit () {
        this.isAdding = false;
        this.layoutUrl$ = this.sectionService.getLayout().map(result => result.url);
        this.sectionList$ = this.sectionService.getSectionList();
    }

    public addSection () {
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
