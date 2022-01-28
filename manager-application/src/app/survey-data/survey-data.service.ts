import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AllSurveyDataService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getQuestionAvgValuesFromServer(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'question/byQuestion', {headers:header});
  }

  public getCategoryAvgValuesFromServer(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'question/byCategory', {headers:header});
  }

  public getQuesitonDataFromServer(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'question/questionData', {headers:header});
  }

  public getCategoryDataFromServer(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'question/categoryData', {headers:header});
  }
}