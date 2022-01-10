import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-vacation',
  templateUrl: './doctor-vacation.component.html',
  styleUrls: ['./doctor-vacation.component.scss']
})
export class DoctorVacationComponent implements OnInit {

  doctors: any;
  vacations : any;
  id: any;
  vacationDescription: any;
  startTime : any;
  endTime : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.apiService.getDoctors().subscribe((response : any) => {
      this.doctors = response;
    })
  }

  selectChanged() {

    

    for(let doctor of this.doctors) {
        
        this.vacationDescription = doctor.vacation.vacationDescription;
        this.startTime = doctor.vacation.startTime;
        this.endTime = doctor.vacation.endTime;
        this.id = doctor.vacation.id;
      
    }
  }



}