import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverPort } from '../../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AllFeedbackViewService {

  private _url = serverPort;
  constructor(private http: HttpClient) { }

  public getFeedbackFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'feedback');
  }
  public approveFeedback(feedbackId: string) {
    return this.http.put<string>(this._url + 'feedback/' + feedbackId, feedbackId);
  }
}
