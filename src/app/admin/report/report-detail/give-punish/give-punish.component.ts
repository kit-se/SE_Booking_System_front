import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-give-punish',
    templateUrl: './give-punish.component.html',
    styleUrls: [ './give-punish.component.scss' ]
})
export class GivePunishComponent implements OnInit {
    dateIterator: any[];
    punishFormGroup: FormGroup;

    constructor (private fb: FormBuilder) {
    }

    ngOnInit () {
        this.punishFormGroup = this.fb.group({
            admin: [ { value: sessionStorage.getItem('id'), disabled: true } ],
            villain: [ { value: '', disabled: true } ],
            period: [ 1 ]
        });
        this.dateIterator = new Array(30);
    }

    public submit (form: FormGroup) {
        // disabled 속성을 가진 애들은 그냥 들고오면 안되기 때문에 raw value로 가져온다.
        // todo 서버로 제재 결과 전달.
        console.log(form.getRawValue());
    }
}
