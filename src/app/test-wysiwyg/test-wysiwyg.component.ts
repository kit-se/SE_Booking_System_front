import { Component, OnDestroy, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-test-wysiwyg',
    templateUrl: './test-wysiwyg.component.html',
    styleUrls: [ './test-wysiwyg.component.scss' ]
})
export class TestWysiwygComponent implements OnInit, OnDestroy {
    fileList: File[];
    previewList: any[];
    code: string;

    constructor () {
    }

    ngOnInit () {
        this.fileList = [];
        this.previewList = [];

        $('#summernote').summernote({
            height: 300,
            toolbar: [
                [ 'insert', [ 'picture' ] ],
                ['fontsize', ['fontsize']],
            ],
            callbacks: {
                onImageUpload: (files) => {
                    for ( let i = 0; i < files.length; i++ ) {
                        this.fileList.push(files[ i ]);
                        this.makePreview(files[ i ]);
                    }
                }
            }
        });

        $('#summernote').summernote('code', '');
    }

    ngOnDestroy () {
        $('#summernote').summernote('destroy');
    }

    private makePreview (file: File) {
        const reader: FileReader = new FileReader();
        reader.addEventListener('load', () => {
            this.previewList.push(reader.result);
        });

        reader.readAsDataURL(file);
    }

    public submit () {
        this.code = $('#summernote').summernote('code');
        console.log(this.fileList);
    }
}
