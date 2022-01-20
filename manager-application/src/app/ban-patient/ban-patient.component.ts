import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { ManagerService } from '../login/manager.service';
import {BanPatientService} from './ban-patient.service'

@Component({
  selector: 'app-ban-patient',
  templateUrl: './ban-patient.component.html',
  styleUrls: ['./ban-patient.component.css']
})
export class BanPatientComponent implements OnInit {
  dtos: any;
  manager: any;

  constructor(private _banPatientService: BanPatientService, private _loginService:LoginService, private _managerService:ManagerService) {}

  ngOnInit(): void {   
    this.getDto();
    this.getLoggedUser();
  }
  
  getLoggedUser(){
    let token = localStorage.getItem('token');
    if(token === null)
      token = ""

    this._loginService.getLoggedUserFromServer(token).subscribe(f=> {
      this.getManager(f.username)
    }
    );
  }

  getManager(username:any): void{
    this._managerService.getManagerByUsernameFromServer(username).subscribe(
      (successData: any) => {  this.manager = successData },
      () => {},
      () => {}
      );
  }

  getDto(): void{
    let token = localStorage.getItem('token');
    if(token === null)
      token = ""
      
    this._banPatientService.getDto(token).subscribe(f => this.dtos = f.sort((a: any, b: any) => b.numOfAppointment - a.numOfAppointment));
  }

  banPatient(patientId: number): void{
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._banPatientService.banPatient(patientId, token).subscribe(() => this.getDto());
  }

  unbanPatient(patientId: number): void{
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._banPatientService.unbanPatient(patientId, token).subscribe(() => this.getDto());
  }

  color(numCanceled: number): string{
    if(numCanceled > 2)
      return '#EFB0A1'
    else
      return ''

  }

}