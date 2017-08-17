import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Injectable()
export class ReportService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    public postReport (data: FormData) {
        this.http.post(this.global.url + `/report`, data).subscribe(console.log);
    }
}
