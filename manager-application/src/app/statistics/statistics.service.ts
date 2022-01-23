import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getSpecializationStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/specialization', {headers:header});
  }

  public getTimeStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/successfulByTime', {headers:header});
  }

  public getEventClickStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/buttonClicks', {headers:header});
  }

  public getNextBackClickStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/backNextClicks', {headers:header});
  }

  public getDoctorStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/doctorStats', {headers:header});
  }

  public getMonthStats(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'event/clicksByMonth', {headers:header});
  }
}