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

export interface Color {
  value: string;
  //viewValue: string;
}

export interface Size {
  value: string;
}

export interface Data_Table {
  val1: string;
  val2: string;
  val3: string;
  val4: string;
  val5: string;
  val6: string;
  val7: string;
  val8: string;

}

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css'],
  providers: [ ],
})
export class MainscreenComponent implements OnInit {
  colors: Color[] = [
    {value: 'Rojo'},
    {value: 'Azul'},
    {value: 'Verde'},
    {value: 'Negro'},
    {value: 'Blanco'},

  ];

  sizes: Size[] = [
    {value: 'S'},
    {value: 'M'},
    {value: 'XL'},
    {value: 'XXL'},
    {value: 'XXL'},

  ];

  element_data: Data_Table [] = [];

  date = new Date();
  date2 =new FormControl(moment().format('DD/MM/YYYY'));

  constructor() { }

  ngOnInit() {
    //var date = new Date();
    //var date2 = new FormControl(moment(date,"DD/MM/YYYY"));
    //var date = new FormControl(moment([2017, 0, 1]));
  }

  addData(val1: string, val2: string, val3: string, val4: string, val5: string, val6: string, val7: string, val8: string) {
    this.element_data.push({val1, val2, val3, val4, val5, val6, val7, val8});
  }

}
