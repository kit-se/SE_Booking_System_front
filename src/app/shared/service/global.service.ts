import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    url: string;

    constructor () {
        this.url = 'http://202.31.202.156:3000';
    }
}
