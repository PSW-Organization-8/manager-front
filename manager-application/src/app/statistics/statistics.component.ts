import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  dataSourceSpecialization: Object = empty;
  dataSourceTime: Object = empty;
  specializationValues: any;
  timeValues: any;

  constructor(private _statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.getSpecializationStats()
    this.getTimeStats()
  }

  getSpecializationStats(){
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._statisticsService.getSpecializationStats(token).subscribe( successData => {  this.specializationValues = successData },
      error => { },
      () => { this.chartSpecialization() }
      );
  }

  chartSpecialization(): void{
    this.dataSourceSpecialization = {
      chart: {
        caption: 'Most sought-after specialization',
        theme: 'fusion',
        enablesmartlabels: "1",
        showlabels: "1",
        numbersuffix: " MMbbl",
        usedataplotcolorforlabels: "1",
        plottooltext: "$label, <b>$value</b> MMbbl"
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

  getTimeStats(){
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._statisticsService.getTimeStats(token).subscribe( successData => {  this.timeValues = successData },
      error => { },
      () => { this.chartTime() }
      );
  }

  chartTime() {
    this.dataSourceTime = {
      chart: {
        caption: 'Successful appointments made',
        xAxisName: 'Time',
        yAxisName: 'Successful appointments',
        theme: 'fusion'
      },
      data: [

        { label: 'Last Week', value: this.timeValues[2] },
        { label: 'Last Month', value: this.timeValues[1] },
        { label: 'Last Year', value: this.timeValues[0] }
      ],
    }
  }

}
