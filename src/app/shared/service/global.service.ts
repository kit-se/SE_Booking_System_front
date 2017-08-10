import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    url: string;

    constructor () {
        // this.url = 'http://13.124.177.198:3000';
        this.url = 'http://localhost:3000';
    }

}
