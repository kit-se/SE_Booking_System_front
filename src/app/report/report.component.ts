import { Component, OnDestroy, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: [ './report.component.scss' ]
})
export class ReportComponent implements OnInit, OnDestroy {
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

    public submit () {
        this.code = $('#summernote').summernote('code');
        console.log(this.fileList);
        // todo code랑 filelist 서버로 보내면 됨 multipart로
    }

    // 사진에 대한 데이터 스키마 생성, 파일리스트에 등록
    private makePreview (file: File) {
        const reader: FileReader = new FileReader();
        reader.addEventListener('load', () => {
            this.fileList.push(file);
            this.previewList.push(reader.result);
        });

        reader.readAsDataURL(file);
    }

    public deletePicture( index: number ) {
        this.previewList.splice( index, 1 );
        this.fileList.splice( index, 1 );
    }
}