import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test-travis',
    templateUrl: './test-travis.component.html',
    styleUrls: [ './test-travis.component.scss' ]
})
export class TestTravisComponent implements OnInit {
    test: boolean;

    constructor () {
    }

    ngOnInit () {
        this.test = true;
    }

}
