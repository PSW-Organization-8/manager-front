import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AllSurveyDataService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getQuestionAvgValuesFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'question');
  }

}