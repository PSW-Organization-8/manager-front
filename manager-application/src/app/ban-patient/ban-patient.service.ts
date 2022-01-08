import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class BanPatientService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getDto(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'appointment/listDto', {headers:header});
  }

  public banPatient(patientId: number, token:any) {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.put<string>(this._url + 'patient/ban/' + patientId, patientId, {headers:header});
  }
  public unbanPatient(patientId: number, token:any) {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.put<string>(this._url + 'patient/unban/' + patientId, patientId, {headers:header});
  }

}