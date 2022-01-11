import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.queryParams.id;
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.apiService.getDoctor(this.id).subscribe((response : any) => {
      this.vacationDescription = response.vacation.vacationDescription;
        this.startTime = new Date(response.vacation.startTime);
        this.endTime = new Date(response.vacation.endTime);
        this.id = response.vacation.id;
    })
  }

  selectChanged() {

    

    for(let doctor of this.doctors) {
        
        
      
    }
  }
}