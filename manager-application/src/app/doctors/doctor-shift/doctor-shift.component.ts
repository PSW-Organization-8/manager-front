import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-shift',
  templateUrl: './doctor-shift.component.html',
  styleUrls: ['./doctor-shift.component.scss']
})
export class DoctorShiftComponent implements OnInit {

  shifts : any;
  shiftId: any;
  id: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) 
  {
    this.id = this.activatedRoute.snapshot.queryParams.id;
  }

  ngOnInit(): void {

    this.load();

  }

  


  load() {
    this.apiService.getShifts().subscribe((response : any) => {
      this.shifts = response;
    })
  }

 

  saveDoctorShift() {
    this.apiService.editDoctorShift(this.shiftId, this.id).subscribe((response: any) => {
        this.load();
    });
  }

}