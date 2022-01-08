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
  shiftStart : any;
  shiftEnd : any;

  constructor( private api: ApiService) { }

  ngOnInit(): void {

    this.api.getShifts().subscribe((response : any) => {
      this.shifts = response;
    })
  
  }
}