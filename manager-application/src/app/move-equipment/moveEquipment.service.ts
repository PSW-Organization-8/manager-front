import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class MoveEquipmentService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient) { }

  public getEquipmentFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'equipments');
  }
  
public sendEquipmentToServer(name: string, room: string, amount: number, destination: string, time: Date, duration: string){
  let equipment = {
     Name : name,
     Room: room,
     Amount : amount,
     Destination : destination,
     Time : time,
     Duration: duration
  };
  return this.http.post<any>(this._url + 'equipment', equipment);
 };
}
