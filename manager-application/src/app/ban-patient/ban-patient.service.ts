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

  public getDto(): Observable<any> {
    return this.http.get<any>(this._url + 'appointment/listDto');
  }

  public banPatient(patientId: number) {
    return this.http.put<string>(this._url + 'patient/ban/' + patientId, patientId);
  }
  public unbanPatient(patientId: number) {
    return this.http.put<string>(this._url + 'patient/unban/' + patientId, patientId);
  }

}