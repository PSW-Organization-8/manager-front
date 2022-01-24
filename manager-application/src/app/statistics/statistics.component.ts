import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { StatisticsService } from './statistics.service';
import * as Widgets from "fusioncharts/fusioncharts.widgets.js";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  dataSourceSpecialization: Object = empty;
  dataSourceTime: Object = empty;
  dataSourceTimeWeek: Object = empty;
  dataSourceTimeMonth: Object = empty;
  dataSourceTimeYear: Object = empty;
  dataSourceEventClicks: Object = empty;
  dataSourceNextBackClicks: Object = empty;
  dataSourceGoodness: Object = empty;

  nextBackClickValues: any;
  eventClickValues: any;
  specializationValues: any;
  timeValues: any;

  constructor(private _statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.getSpecializationStats()
  }

  getSpecializationStats(){
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._statisticsService.getSpecializationStats(token).subscribe( successData => {  this.specializationValues = successData },
      error => { },
      () => { this.chartSpecialization(); this.getTimeStats() }
      );
  }

  getTimeStats(){
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._statisticsService.getTimeStats(token).subscribe( successData => {  this.timeValues = successData },
      error => { },
      () => { this.chartTime(); this.getEventClickStats() }
      );
  }

  getEventClickStats(){
    let token = localStorage.getItem('token');
    if(token === null)
      token = ""

    this._statisticsService.getEventClickStats(token).subscribe( successData => {  this.eventClickValues = successData },
      error => { },
      () => { this.chartEventClicks(); this.getNextBackClickStats()}
      );
    }

  getNextBackClickStats(){
    let token = localStorage.getItem('token');
    if(token === null)
      token = ""

    this._statisticsService.getNextBackClickStats(token).subscribe( successData => {  this.nextBackClickValues = successData },
      error => { },
      () => { this.chartNextBackClicks(); this.chartGoodness()}
      );
    }

  chartSpecialization(): void{
    this.dataSourceSpecialization = {
      chart: {
        caption: 'Most sought-after specialization',
        subcaption: 'by user specialization selection',
        theme: 'fusion',
        enablesmartlabels: "1",
        showlabels: "1",
        usedataplotcolorforlabels: "1",
        plottooltext: "$label was choosen <b>$value</b> times by users"
      },
      data: [
        { label: 'Family Physician', value: this.specializationValues[0] },
        { label: 'Surgeon', value: this.specializationValues[1] },
        { label: 'Internist', value: this.specializationValues[2] },
        { label: 'Dermatologist', value: this.specializationValues[3] },
        { label: 'Cardiologist', value: this.specializationValues[4] },
        { label: 'Otorhinolaryngologist', value: this.specializationValues[5] },
        { label: 'Urologist', value: this.specializationValues[6] },
        { label: 'Gynecologist', value: this.specializationValues[7] },
        { label: 'Neurologist', value: this.specializationValues[8] },      
      ],
    }
  }

  chartTime() {
    this.dataSourceTime = {
      chart: {
        caption: 'Successful appointments made',
        xAxisName: 'Time',
        yAxisName: 'Successful schedules',
        theme: 'fusion'
      },
      data: [

        { label: 'Last Week', value: this.timeValues[6] },
        { label: 'Last Month', value: this.timeValues[3] },
        { label: 'Last Year', value: this.timeValues[0] }
      ],
    }

    this.dataSourceTimeWeek = {
      chart: {
        caption: 'Successful appointments made in the past weeks',
        xAxisName: 'Time',
        yAxisName: 'Successful schedules',
        theme: 'fusion'
      },
      data: [

        { label: 'Last Week', value: this.timeValues[6] },
        { label: 'Week before', value: this.timeValues[7] },
        { label: 'Two Weeks before', value: this.timeValues[8] }
      ],
    }

    this.dataSourceTimeMonth = {
      chart: {
        caption: 'Successful appointments made in the past months',
        xAxisName: 'Time',
        yAxisName: 'Successful schedules',
        theme: 'fusion'
      },
      data: [

        { label: 'Last Month', value: this.timeValues[3] },
        { label: 'Month before', value: this.timeValues[4] },
        { label: 'Two Month before', value: this.timeValues[5] }
      ],
    }

    this.dataSourceTimeYear = {
      chart: {
        caption: 'Successful appointments made in the past years',
        xAxisName: 'Time',
        yAxisName: 'Successful schedules',
        theme: 'fusion'
      },
      data: [

        { label: 'Last Year', value: this.timeValues[0] },
        { label: 'Year before', value: this.timeValues[1] },
        { label: 'Two Year before', value: this.timeValues[2] }
      ],
    }
  }

  chartEventClicks() {
    this.dataSourceEventClicks = {
      chart: {
        caption: "Avg clicks needed for succesful schedule",
        subcaption: " by age groups",
        showsum: "1",
        plottooltext:
          "$label clicked on average <b>$dataValue</b> times on $seriesName",
        theme: "fusion",
        drawcrossline: "1"
      },
      categories: [
        {
          category: [
            { label: "Minors" },
            { label: "Young Adults" },
            { label: "Adults" },
            { label: "Seniors" },
            { label: "Veterans" }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Next",
          data: [
            { value: this.eventClickValues?.minors[0] },
            { value: this.eventClickValues?.youngAdults[0] },
            { value: this.eventClickValues?.adults[0] },
            { value: this.eventClickValues?.seniors[0] },
            { value: this.eventClickValues?.veterans[0] }
          ]
        },
        {
          seriesname: "Back",
          data: [ 
            { value: this.eventClickValues?.minors[1] },
            { value: this.eventClickValues?.youngAdults[1] },
            { value: this.eventClickValues?.adults[1] },
            { value: this.eventClickValues?.seniors[1] },
            { value: this.eventClickValues?.veterans[1] }
          ]
        },
        {
          seriesname: "Select Specialization",
          data: [
            { value: this.eventClickValues?.minors[2] },
            { value: this.eventClickValues?.youngAdults[2] },
            { value: this.eventClickValues?.adults[2] },
            { value: this.eventClickValues?.seniors[2] },
            { value: this.eventClickValues?.veterans[2] }
          ]
        },
        {
          seriesname: "Select Date",
          data: [
            { value: this.eventClickValues?.minors[3] },
            { value: this.eventClickValues?.youngAdults[3] },
            { value: this.eventClickValues?.adults[3] },
            { value: this.eventClickValues?.seniors[3] },
            { value: this.eventClickValues?.veterans[3] }
          ]
        },
        {
          seriesname: "Select Doctor",
          data: [
            { value: this.eventClickValues?.minors[4] },
            { value: this.eventClickValues?.youngAdults[4] },
            { value: this.eventClickValues?.adults[4] },
            { value: this.eventClickValues?.seniors[4] },
            { value: this.eventClickValues?.veterans[4] }
          ]
        },
        {
          seriesname: "Schedule",
          data: [
            { value: this.eventClickValues?.minors[5] },
            { value: this.eventClickValues?.youngAdults[5] },
            { value: this.eventClickValues?.adults[5] },
            { value: this.eventClickValues?.seniors[5] },
            { value: this.eventClickValues?.veterans[5] }
          ]
        }
      ]
    };
  }

  chartNextBackClicks() {
    this.dataSourceNextBackClicks = {
      chart: {
        caption: "Next and Back button clicks",
        subcaption:"by steps of appointment",
        placevaluesinside: "1",
        showvalues: "0",
        plottooltext: "<b> $seriesName</b> button clicked <b>$dataValue</b> times on this page",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            { label: "Choose Date page" },
            { label: "Choose Specialization page" },
            { label: "Choose Doctor page" },
            { label: "Choose Term page" }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Back",
          data: [
            { value: 0},
            { value: this.nextBackClickValues.back[0] },
            { value: this.nextBackClickValues.back[1] },
            { value: this.nextBackClickValues.back[2] }
          ]
        },
        {
          seriesname: "Next",
          data: [
            { value: this.nextBackClickValues.next[0] },
            { value: this.nextBackClickValues.next[1] },
            { value: this.nextBackClickValues.next[2] },
            { value: 0}
          ]
        }
      ]
    };
  }

  chartGoodness() {
    let back = this.sum(this.nextBackClickValues.back)
    let next = this.sum(this.nextBackClickValues.next)
    let finished = this.eventClickValues?.minors[5]??0 + this.eventClickValues?.youngAdults[5]??0 + this.eventClickValues?.adults[5]??0 +
                   this.eventClickValues?.seniors[5]??0 + this.eventClickValues?.veterans[5]??0;

    this.dataSourceGoodness = {
      chart: {
        caption: "Standard appointment functionality rating",
        lowerlimit: "0",
        upperlimit: "100",
        showvalue: "1",
        numbersuffix: "%",
        theme: "fusion",
        showtooltip: "0"
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "50",
            code: "#F2726F"
          },
          {
            minvalue: "50",
            maxvalue: "75",
            code: "#FFC533"
          },
          {
            minvalue: "75",
            maxvalue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: 3 * finished / (next + back) * 100 
          }
        ]
      }
    };
  }

  sum(list: any){
    return list.reduce((acc: any, cur: any) => acc + cur, 0);
  }

}
