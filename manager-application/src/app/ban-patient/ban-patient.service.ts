import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class BanPatientService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getPatientsFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'patient');
  }

  public getNumOfCanceledFromServer(patientId: number): Observable<any> {
    return this.http.get<any>(this._url + 'appointment/cancel/' + patientId);
  }

}