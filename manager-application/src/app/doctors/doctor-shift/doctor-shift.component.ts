import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-shift',
  templateUrl: './doctor-shift.component.html',
  styleUrls: ['./doctor-shift.component.scss']
})
export class DoctorShiftComponent implements OnInit {

  doctors : any;
  shifts : any;
  shiftId: any;
  shiftType: any;
  shiftName : any;

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

    this.shiftName = this.shiftType;

    for(let doctor of this.doctors) {
      if(doctor.doctorShift.shiftType == this.shiftType) {
     
        this.shiftId = doctor.doctorShift.id;
      }
    }
  }

  saveShift() {
    this.apiService.editShift({
      shiftType: this.shiftType,
      id: this.shiftId 
    }).subscribe((response: any) => {
        this.load();
    });
  }

}