import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
    selector: 'app-test-wysiwyg',
    templateUrl: './test-wysiwyg.component.html',
    styleUrls: [ './test-wysiwyg.component.scss' ]
})
export class TestWysiwygComponent implements OnInit {
    constructor () {
    }
    ngOnInit () {
        $('#summernote').summernote({
            height: 300,
            toolbar: [
                ['insert', ['picture']]
            ]
        });
    }

    public submit() {
        const code = $('#summernote').summernote('code');
        console.log( code );
    }
}
