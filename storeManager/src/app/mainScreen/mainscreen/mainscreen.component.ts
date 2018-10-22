import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css'],
  providers: [ ],
})
export class MainscreenComponent implements OnInit {
  date = new Date();
  date2 =new FormControl(moment().format('DD/MM/YYYY'));

  constructor() { }

  ngOnInit() {
    //var date = new Date();
    //var date2 = new FormControl(moment(date,"DD/MM/YYYY"));
    //var date = new FormControl(moment([2017, 0, 1]));
  }

}
