import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PunishService } from '../../shared/http/punish.service';

@Component({
    selector: 'app-punish',
    templateUrl: './punish.component.html',
    styleUrls: ['./punish.component.scss']
})
export class PunishComponent implements OnInit {
    punishList$: Observable<any>;

    constructor (private punishService: PunishService) {
    }

    ngOnInit () {
        this.punishList$ = this.punishService.getPunishList();
    }

}
