import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: [ './dev.component.scss' ]
})
export class DevComponent implements OnInit {
    front: any[];
    back: any[];

    constructor () {
    }

    ngOnInit () {
        this.front = [
            { title: 'angular', url: 'https://angular.io/', min_version: '4.3.0', remark: '' },
            { title: 'bootstrap', url: 'http://getbootstrap.com/', min_version: '3.3.7', remark: '' },
            {
                title: 'bootstrap material design',
                url: 'http://fezvrasta.github.io/bootstrap-material-design/',
                min_version: '4.0.2',
                remark: 'bootstrap theme'
            },
            {
                title: 'arrive.js',
                url: 'https://github.com/uzairfarooq/arrive',
                min_version: '2.4.1',
                remark: 'dynamic DOM event manager for bootstrap material design'
            },
            { title: 'jquery', url: 'https://jquery.com/', min_version: '3.2.1', remark: '' },
            { title: 'moment.js', url: 'https://momentjs.com/', min_version: '2.18.1', remark: '' },
            {
                title: 'normalize.css',
                url: 'https://necolas.github.io/normalize.css/',
                min_version: '7.0.0',
                remark: ''
            },
            {
                title: 'ngx-bootstrap',
                url: 'http://valor-software.com/ngx-bootstrap/#/',
                min_version: '1.7.1',
                remark: ''
            },
            { title: 'summernote', url: 'http://summernote.org/', min_version: '0.8.6', remark: '' }
        ];

        this.back = [
            { title: 'express', url: 'http://expressjs.com/', min_version: '4.15.3', remark: '' },
            {
                title: 'promise-mysql',
                url: 'https://github.com/lukeb-uk/node-promise-mysql',
                min_version: '3.0.1',
                remark: ''
            },
            {
                title: 'request-promise',
                url: 'https://github.com/request/request-promise',
                min_version: '4.2.1',
                remark: ''
            },
            { title: 'rxjs', url: 'https://github.com/ReactiveX/rxjs', min_version: '5.4.2', remark: '' }
        ];
    }
}
