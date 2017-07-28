import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-test-wysiwyg',
    templateUrl: './test-wysiwyg.component.html',
    styleUrls: [ './test-wysiwyg.component.scss' ]
})
export class TestWysiwygComponent implements OnInit {
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
                [ 'insert', [ 'picture' ] ]
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
