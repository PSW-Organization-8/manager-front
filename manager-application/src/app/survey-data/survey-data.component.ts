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
  questionData: any;
  categoryData: any;

  constructor(private _allSurveyDataService: AllSurveyDataService) {}

  ngOnInit(): void {   
    this.getQuestionAvgValues()
    this.getCategoryAvgValues()
  }

  getQuestionAvgValues(): void{
    this._allSurveyDataService.getQuestionAvgValuesFromServer().subscribe(
      successData => {  this.questionValues = successData },
      error => { },
      () => { this.getQuestionData() }
      );
  }

  getCategoryAvgValues(): void{
    this._allSurveyDataService.getCategoryAvgValuesFromServer().subscribe(
      successData => {  this.categoryValues = successData },
      error => { },
      () => { this.getCategoryData() }
      );
  }

  getQuestionData(): void{
    this._allSurveyDataService.getQuesitonDataFromServer().subscribe(
      successData => {  this.questionData = successData },
      error => { },
      () => { this.chartQuestionValues() }
      );
  }

  getCategoryData(): void{
    this._allSurveyDataService.getCategoryDataFromServer().subscribe(
      successData => {  this.categoryData = successData },
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
        { label: '1.', value: this.categoryValues[0], tooltext: 'Text: About Doctor' + '<br> Avg: ' + parseFloat(this.categoryValues[0].toFixed(2)) + '<br> Num of 1:  ' + this.categoryData[0].ones + '<br> Num of 2: ' + this.categoryData[0].twos + '<br> Num of 3: ' + this.categoryData[0].threes + '<br> Num of 4: ' + this.categoryData[0].fours + '<br> Num of 5: ' + this.categoryData[0].fives },
        { label: '2.', value: this.categoryValues[1], tooltext: 'Text: About Hospital' + '<br> Avg: ' + parseFloat(this.categoryValues[1].toFixed(2)) + '<br> Num of 1:  ' + this.categoryData[1].ones + '<br> Num of 2: ' + this.categoryData[1].twos + '<br> Num of 3: ' + this.categoryData[1].threes + '<br> Num of 4: ' + this.categoryData[1].fours + '<br> Num of 5: ' + this.categoryData[1].fives },
        { label: '3.', value: this.categoryValues[2], tooltext: 'Text: About Medical Staff' + '<br> Avg: ' + parseFloat(this.categoryValues[2 ].toFixed(2)) + '<br> Num of 1:  ' + this.categoryData[2].ones + '<br> Num of 2: ' + this.categoryData[2].twos + '<br> Num of 3: ' + this.categoryData[2].threes + '<br> Num of 4: ' + this.categoryData[2].fours + '<br> Num of 5: ' + this.categoryData[2].fives }
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: this.avg(this.categoryValues),
              valueOnRight: 1,
              displayValue: 'All Question Avg: ' + parseFloat(this.avg(this.categoryValues).toFixed(2)).toString(),
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
        { label: '1.', value: this.questionValues[0], tooltext: 'Text: How would you rate doctors professionalism?' + '<br> Avg: ' + parseFloat(this.questionValues[0].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[0].ones + '<br> Num of 2: ' + this.questionData[0].twos + '<br> Num of 3: ' + this.questionData[0].threes + '<br> Num of 4: ' + this.questionData[0].fours + '<br> Num of 5: ' + this.questionData[0].fives},
        { label: '2.', value: this.questionValues[1], tooltext: 'Text: How would you rate doctors politeness?' + '<br> Avg: ' + parseFloat(this.questionValues[1].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[1].ones + '<br> Num of 2: ' + this.questionData[1].twos + '<br> Num of 3: ' + this.questionData[1].threes + '<br> Num of 4: ' + this.questionData[1].fours + '<br> Num of 5: ' + this.questionData[1].fives },
        { label: '3.', value: this.questionValues[2], tooltext: 'Text: How would you rate doctors technicality?' + '<br> Avg: ' + parseFloat(this.questionValues[2].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[2].ones + '<br> Num of 2: ' + this.questionData[2].twos + '<br> Num of 3: ' + this.questionData[2].threes + '<br> Num of 4: ' + this.questionData[2].fours + '<br> Num of 5: ' + this.questionData[2].fives },
        { label: '4.', value: this.questionValues[3], tooltext: 'Text: How would you rate doctors skill?' + '<br> Avg: ' + parseFloat(this.questionValues[3].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[3].ones + '<br> Num of 2: ' + this.questionData[3].twos + '<br> Num of 3: ' + this.questionData[3].threes + '<br> Num of 4: ' + this.questionData[3].fours + '<br> Num of 5: ' + this.questionData[3].fives },
        { label: '5.', value: this.questionValues[4], tooltext: 'Text: How would you rate doctors knowledge?' + '<br> Avg: ' + parseFloat(this.questionValues[4].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[4].ones + '<br> Num of 2: ' + this.questionData[4].twos + '<br> Num of 3: ' + this.questionData[4].threes + '<br> Num of 4: ' + this.questionData[4].fours + '<br> Num of 5: ' + this.questionData[4].fives },
        { label: '6.', value: this.questionValues[5], tooltext: 'Text: How would you rate hospital environment?' + '<br> Avg: ' + parseFloat(this.questionValues[5].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[5].ones + '<br> Num of 2: ' + this.questionData[5].twos + '<br> Num of 3: ' + this.questionData[5].threes + '<br> Num of 4: ' + this.questionData[5].fours + '<br> Num of 5: ' + this.questionData[5].fives },
        { label: '7.', value: this.questionValues[6], tooltext: 'Text: How would you rate hospital equipment?' + '<br> Avg: ' + parseFloat(this.questionValues[6].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[6].ones + '<br> Num of 2: ' + this.questionData[6].twos + '<br> Num of 3: ' + this.questionData[6].threes + '<br> Num of 4: ' + this.questionData[6].fours + '<br> Num of 5: ' + this.questionData[6].fives},
        { label: '8.', value: this.questionValues[7], tooltext: 'Text: How would you rate hospital hygiene?' + '<br> Avg: ' + parseFloat(this.questionValues[7].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[7].ones + '<br> Num of 2: ' + this.questionData[7].twos + '<br> Num of 3: ' + this.questionData[7].threes + '<br> Num of 4: ' + this.questionData[7].fours + '<br> Num of 5: ' + this.questionData[7].fives},
        { label: '9.', value:  this.questionValues[8], tooltext: 'Text: How would you rate hospital prices?' + '<br> Avg: ' + parseFloat(this.questionValues[8].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[8].ones + '<br> Num of 2: ' + this.questionData[8].twos + '<br> Num of 3: ' + this.questionData[8].threes + '<br> Num of 4: ' + this.questionData[8].fours + '<br> Num of 5: ' + this.questionData[8].fives},
        { label: '10.', value: this.questionValues[9], tooltext: 'Text: How would you rate hospital waiting time?' + '<br> Avg: ' + parseFloat(this.questionValues[9].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[9].ones + '<br> Num of 2: ' + this.questionData[9].twos + '<br> Num of 3: ' + this.questionData[9].threes + '<br> Num of 4: ' + this.questionData[9].fours + '<br> Num of 5: ' + this.questionData[9].fives},
        { label: '11.', value: this.questionValues[10], tooltext: 'Text: How would you rate medical staffs professionalism?' + '<br> Avg: ' + parseFloat(this.questionValues[10].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[10].ones + '<br> Num of 2: ' + this.questionData[10].twos + '<br> Num of 3: ' + this.questionData[10].threes + '<br> Num of 4: ' + this.questionData[10].fours + '<br> Num of 5: ' + this.questionData[10].fives },
        { label: '12.', value: this.questionValues[11], tooltext: 'Text: How would you rate medical staffs politeness?' + '<br> Avg: ' + parseFloat(this.questionValues[11].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[11].ones + '<br> Num of 2: ' + this.questionData[11].twos + '<br> Num of 3: ' + this.questionData[11].threes + '<br> Num of 4: ' + this.questionData[11].fours + '<br> Num of 5: ' + this.questionData[11].fives},
        { label: '13.', value: this.questionValues[12], tooltext: 'Text: How would you rate medical staffs technicality?' + '<br> Avg: ' + parseFloat(this.questionValues[12].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[12].ones + '<br> Num of 2: ' + this.questionData[12].twos + '<br> Num of 3: ' + this.questionData[12].threes + '<br> Num of 4: ' + this.questionData[12].fours + '<br> Num of 5: ' + this.questionData[12].fives },
        { label: '14.', value: this.questionValues[13], tooltext: 'Text: How would you rate medical staffs skill?' + '<br> Avg: ' + parseFloat(this.questionValues[13].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[13].ones + '<br> Num of 2: ' + this.questionData[13].twos + '<br> Num of 3: ' + this.questionData[13].threes + '<br> Num of 4: ' + this.questionData[13].fours + '<br> Num of 5: ' + this.questionData[13].fives },
        { label: '15.', value: this.questionValues[14], tooltext: 'Text: How would you rate medical staffs knowledge?' + '<br> Avg: ' + parseFloat(this.questionValues[14].toFixed(2)) + '<br> Num of 1:  ' + this.questionData[14].ones + '<br> Num of 2: ' + this.questionData[14].twos + '<br> Num of 3: ' + this.questionData[14].threes + '<br> Num of 4: ' + this.questionData[14].fours + '<br> Num of 5: ' + this.questionData[14].fives }
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: this.avg(this.questionValues),
              valueOnRight: 1,
              displayValue: 'All Question Avg: ' + parseFloat(this.avg(this.questionValues).toFixed(2)).toString(),
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
