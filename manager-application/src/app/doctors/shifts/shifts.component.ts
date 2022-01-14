import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  shifts : any;
  id : any;
  shiftType : any;
  shiftName : any;
  shiftStart : any;
  shiftEnd : any;
  shiftId: any;
  currentUnit = 1

  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  
  }

  load() {
    this.api.getShifts().subscribe((response : any) => {
      this.shifts = response;
    })
  }

  selectChanged() {

    this.shiftName = this.shiftType;

    for(let shift of this.shifts) {
      if(shift.shiftType == this.shiftType) {
        this.shiftStart = shift.shiftStart;
        this.shiftEnd = shift.shiftEnd;
        this.shiftId = shift.id;
      }
    }
  }

  saveShift() {
    this.api.editShift({
      shiftType: this.shiftType,
      shiftEnd: this.shiftEnd,
      shiftStart: this.shiftStart,
      id: this.shiftId 
    }).subscribe((response: any) => {
        this.load();
    });
  }
}