import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';
import { News } from './news';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ActionsAndNewsService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public getAllActionsAndNews(): Observable<any>{
    return this.http.get<News>(this._url + 'actionsAndNews');
  }

  public approveNews(action : News) {
    return this.http.put<News>(this._url + 'actionsAndNews/approve?id=' + action.id, action).subscribe(
        (response) => {
          this.toastr.success('Successfully approved news')
          action.posted = true;
        },
        (error) => {
          this.toastr.error('Unsuccessfully approved news')
        }
      )
  }

  public unApproveNews(action : News) {
    return this.http.put<News>(this._url + 'actionsAndNews/unapprove', action).subscribe(
      (response) => {
        this.toastr.success('Successfully unapproved news')
        action.posted = false;
      },
      (error) => {
        this.toastr.error('Unsuccessfully unapproved news')
      }
    )
  }
}
