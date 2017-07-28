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

        // wysiwyg init
        $('#summernote').summernote({
            height: 300,
            toolbar: [
                ['fontsize', ['fontsize']],
                ['style', ['bold', 'italic', 'underline', 'clear']],
                [ 'insert', [ 'picture' ] ],
                ['para', ['ul', 'ol']],
            ],
            callbacks: {
                onImageUpload: (files) => {
                    for ( let i = 0; i < files.length; i++ ) {
                        this.makePreview(files[ i ]);
                    }
                }
            }
        });
        // reset
        $('#summernote').summernote('code', '');
    }

    ngOnDestroy () {
        $('#summernote').summernote('destroy');
    }

    private makePreview (file: File) {
        const reader: FileReader = new FileReader();
        reader.addEventListener('load', () => {
            this.fileList.push(file);
            this.previewList.push(reader.result);
        });

        reader.readAsDataURL(file);
    }

    public submit () {
        this.code = $('#summernote').summernote('code');
        console.log(this.fileList);
    }

    public deletePicture( index: number ) {
        this.previewList.splice( index, 1 );
        this.fileList.splice( index, 1 );

        console.log( this.previewList, this.fileList );
    }
}
