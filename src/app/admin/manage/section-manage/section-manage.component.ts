import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SectionService } from '../../../shared/http/section.service';

@Component({
    selector: 'app-section-manage',
    templateUrl: './section-manage.component.html',
    styleUrls: ['./section-manage.component.scss']
})
export class SectionManageComponent implements OnInit {
    isAdding: boolean;
    layoutFile: File;
    layoutUrl$: Observable<any>;
    sectionList$: Observable<any>;
    sectionForm: FormGroup;

    constructor (private sectionService: SectionService, private fb: FormBuilder) {
    }

    ngOnInit () {
        this.isAdding = false;
        this.layoutFile = null;
        this.layoutUrl$ = this.sectionService.getLayout().map(result => result.url);
        this.sectionList$ = this.sectionService.getSectionList();
        this.sectionForm = this.fb.group({
            name: ['', Validators.required]
        })
    }

    public addSection (data) {
        if ( data.name !== '' ) {
            this.sectionService.postSection(data).subscribe(() => {
                this.sectionList$ = this.sectionService.getSectionList();
            });

            this.sectionForm.reset();
            this.isAdding = false;
        }
    }

    public deleteSection (id: number) {
        this.sectionService.deleteSection(id).subscribe(() => {
            this.sectionList$ = this.sectionService.getSectionList();
        });
    }

    public postLayout () {
        if ( this.layoutFile !== null ) {
            const data = new FormData();
            data.append('layout_file', this.layoutFile);
            this.sectionService.postLayout(data).subscribe(result => {
                this.layoutUrl$ = this.sectionService.getLayout().map(result => result.url);
            });
        }
    }
}
