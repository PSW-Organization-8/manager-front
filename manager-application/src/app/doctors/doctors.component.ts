import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors : any;
  shifts : any;
  vacations : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getDoctors().subscribe((response : any) => {
  
      this.doctors = response;
    
    })
  }

}