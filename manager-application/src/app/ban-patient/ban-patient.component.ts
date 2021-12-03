import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import {BanPatientService} from './ban-patient.service'

@Component({
  selector: 'app-ban-patient',
  templateUrl: './ban-patient.component.html',
  styleUrls: ['./ban-patient.component.css']
})
export class BanPatientComponent implements OnInit {
  dtos: any;

  constructor(private _banPatientService: BanPatientService) {}

  ngOnInit(): void {   

    this.getDto();
  }

  getDto(): void{
    this._banPatientService.getDto().subscribe(f => this.dtos = f);
  }

  banPatient(patientId: number): void{
    this._banPatientService.banPatient(patientId).subscribe(() => this.getDto());
  }

  unbanPatient(patientId: number): void{
    this._banPatientService.unbanPatient(patientId).subscribe(() => this.getDto());
  }

  color(numCanceled: number): string{
    if(numCanceled > 2)
      return 'tomato'
    else
      return ''

  }

}