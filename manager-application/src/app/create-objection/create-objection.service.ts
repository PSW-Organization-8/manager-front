import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class CreateObjectionService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient) { }

  public getPharmacyFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'Pharmacy');
  }
  
public sendObjectionToServer(pharmacyName: string, textObjection:string){
  let objection = {
    PharmacyName: pharmacyName,
    TextObjection: textObjection
  };
  return this.http.post<any>(this._url + 'objection', objection);
 };
}
