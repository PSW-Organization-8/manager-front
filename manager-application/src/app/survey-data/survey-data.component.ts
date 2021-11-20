import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import {AllSurveyDataService} from './survey-data.service'

@Component({
  selector: 'app-survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.css']
})
export class SurveyDataComponent implements OnInit {
  dataSourceQuestionChart: Object = empty;
  dataSourceCategoryChart: Object = empty;
  questionValues: any;
  categoryValues: any;

  constructor(private _allSurveyDataService: AllSurveyDataService) {}

  ngOnInit(): void {   
    this.getQuestionAvgValuesFromServer()
    this.getCategoryAvgValuesFromServer()
  }

  getQuestionAvgValuesFromServer(): void{
    this._allSurveyDataService.getQuestionAvgValuesFromServer().subscribe(
      successData => {  this.questionValues = successData },
      error => { },
      () => { this.chartQuestionValues() }
      );
  }

  getCategoryAvgValuesFromServer(): void{
    this._allSurveyDataService.getCategoryAvgValuesFromServer().subscribe(
      successData => {  this.categoryValues = successData },
      error => { },
      () => { this.chartCategoryValues() }
      );
  }

  chartCategoryValues(): void{

    this.dataSourceCategoryChart = {
      chart: {
        caption: 'Avarage answer by category',
        xAxisName: 'Categories',
        yAxisName: 'Avg Values',
        numberSuffix: '/5',
        theme: 'fusion'
      },
      data: [
        { label: '1.', value: this.categoryValues[0] },
        { label: '2.', value: this.categoryValues[1] },
        { label: '3.', value: this.categoryValues[2] }
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: this.avg(this.categoryValues),
              valueOnRight: 1,
              displayValue: 'All Question Avg',
              thickness: 3,
              color: "#efb0a1"
            }
          ]
        }
      ]
    }
  }

  chartQuestionValues(): void{
   
    this.dataSourceQuestionChart = {
      chart: {
        caption: 'Avarage answer by question',
        xAxisName: 'Questions',
        yAxisName: 'Avg Values',
        numberSuffix: '/5',
        theme: 'fusion',
      },
      data: [
        { label: '1.', value: this.questionValues[0] },
        { label: '2.', value: this.questionValues[1] },
        { label: '3.', value: this.questionValues[2] },
        { label: '4.', value: this.questionValues[3] },
        { label: '5.', value: this.questionValues[4] },
        { label: '6.', value: this.questionValues[5] },
        { label: '7.', value: this.questionValues[6] },
        { label: '8.', value: this.questionValues[7] },
        { label: '9.', value:  this.questionValues[8] },
        { label: '10.', value: this.questionValues[9] },
        { label: '11.', value: this.questionValues[10] },
        { label: '12.', value: this.questionValues[11] },
        { label: '13.', value: this.questionValues[12] },
        { label: '14.', value: this.questionValues[13] },
        { label: '15.', value: this.questionValues[14] }
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: this.avg(this.questionValues),
              valueOnRight: 1,
              displayValue: 'All Question Avg',
              thickness: 3,
              color: "#efb0a1"
            }
          ]
        }
      ]
    }
  }

  avg(elmt: any): number{
    var sum = 0;
    for( var i = 0; i < elmt.length; i++ ){
      sum += elmt[i]; 
    }
    return sum/elmt.length;
  }
}
