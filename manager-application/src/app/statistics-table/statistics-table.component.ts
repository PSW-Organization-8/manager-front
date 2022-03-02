import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics/statistics.service';

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.css']
})
export class StatisticsTableComponent implements OnInit {

  doctorEventStats: any;
  monthStats: any;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  constructor(private _statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.getDoctorStats()
  }

  getDoctorStats(){
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._statisticsService.getDoctorStats(token).subscribe( successData => {  this.doctorEventStats = successData },
      error => { },
      () => { this.getMonthStats()}
      );
  }

  getMonthStats(){
      let token = localStorage.getItem('token');
        if(token === null)
          token = ""
      this._statisticsService.getMonthStats(token).subscribe(f => this.monthStats = f);
      
  }

  color(doctorScore: number): string{
    var sum = 0; 
    for(var i = 0; i < this.doctorEventStats.length; i++){
        sum += parseInt(this.doctorEventStats[i].scheduled, 10);
    }
    for(var i = 0; i < this.doctorEventStats.length; i++){
      sum += parseInt(this.doctorEventStats[i].uniquePatients, 10);
  }

    var avg = sum/(this.doctorEventStats.length);

    if(doctorScore > avg)
      return '#57dbb3'
    else
      return ''

  }

}
