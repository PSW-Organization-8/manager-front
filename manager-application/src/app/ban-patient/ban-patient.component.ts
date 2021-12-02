import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import {BanPatientService} from './ban-patient.service'

@Component({
  selector: 'app-ban-patient',
  templateUrl: './ban-patient.component.html',
  styleUrls: ['./ban-patient.component.css']
})
export class BanPatientComponent implements OnInit {
  patients: any;
  numCanceled : number = 0;

  constructor(private _banPatientService: BanPatientService) {}

  ngOnInit(): void {   
    this.getAllPatients();
  }

  getAllPatients(): void{
    this._banPatientService.getPatientsFromServer().subscribe(f => this.patients = f);
  }

  getCanceled(id : number): void{
    this._banPatientService.getNumOfCanceledFromServer(id).subscribe(f => this.numCanceled = f);
  }

}