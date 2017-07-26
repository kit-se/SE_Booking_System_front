import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-give-punish',
    templateUrl: './give-punish.component.html',
    styleUrls: [ './give-punish.component.scss' ]
})
export class GivePunishComponent implements OnInit {
    dateIterator: any[];

    constructor () {
    }

    ngOnInit () {
        this.dateIterator = new Array(30);
    }

}
