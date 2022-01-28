import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hospitalServerPort } from '../../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AllFeedbackViewService {

  private _url = hospitalServerPort;
  constructor(private http: HttpClient) { }

  public getFeedbackFromServer(token: any): Observable<any> {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.get<any>(this._url + 'feedback', {headers:header});
  }
  public approveFeedback(feedbackId: string, token: any) {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.put<string>(this._url + 'feedback/' + feedbackId, feedbackId, {headers:header});
  }
  public removeFeedback(feedbackId: string, token: any) {
    let result = token.slice(1,-1);
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
    return this.http.put<string>(this._url + 'feedback/remove/' + feedbackId, feedbackId, {headers:header});
  }
}
