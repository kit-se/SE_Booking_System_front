import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})

export class MypageComponent implements OnInit {
  isBefore:boolean = moment('2017-08-01').isBefore('2017-08-02');

  constructor() { }

  ngOnInit() {
  }

}

