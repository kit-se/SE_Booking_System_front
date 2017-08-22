import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { AdminService } from '../../../../shared/http/admin.service';
import { PunishService } from '../../../../shared/http/punish.service';

@Component({
    selector: 'app-give-punish',
    templateUrl: './give-punish.component.html',
    styleUrls: ['./give-punish.component.scss']
})
export class GivePunishComponent implements OnInit {
    @Input() suspect: string;
    @Input() id: number;
    dateIterator: any[];
    punishFormGroup: FormGroup;

    constructor (private fb: FormBuilder, private punishService: PunishService, private adminService: AdminService) {
    }

    ngOnInit () {
        this.punishFormGroup = this.fb.group({
            admin: [{ value: sessionStorage.getItem('id'), disabled: true }],
            period: [1]
        });
        this.dateIterator = new Array(30);
    }

    public submit (form: FormGroup) {
        // disabled 속성을 가진 애들은 그냥 들고오면 안되기 때문에 raw value로 가져온다.
        // 로그인된 admin의 정보들 불러와 id를 넣고 post한다.
        this.adminService.getAdminByCredit(form.getRawValue().admin).subscribe(admin => {
            let data = {
                id: this.id,
                manager: admin[0].id,
                result: form.getRawValue().period + '일 사용금지',
                start_date: moment().format('YYYY-MM-DD'),
                end_date: moment().add(form.getRawValue().period, 'd').format('YYYY-MM-DD')
            };
            this.punishService.postPunish(data).subscribe();
        });
    }
}
