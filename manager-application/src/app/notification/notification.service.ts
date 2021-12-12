import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { integrationServerPort } from '../app.consts';
import { Notification } from './notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _url = integrationServerPort
  toastr: any;

  constructor(private http: HttpClient) { }
  public SaveNotification(title: string,read: boolean,ContentNotification: string,fileName: string){
    let notification = {
      Title: title,
      Read: read,
      ContentNotification:ContentNotification,
      FileName:fileName
    };
    
    return this.http.post(this._url +'Notification',notification);
  }
  public GetAllNotification(){
    
    return this.http.get<any>(this._url +'Notification');
  }

  public read(notification : Notification) {
    return this.http.put<any>(this._url + 'Notification/read?id='+ notification.id,notification).subscribe(
        (response) => {
        //this.toastr.success('Successfully read notification')
        notification.read=true;
         
        },
        (error) => {
          this.toastr.error('Unsuccessfully read notification')
        }
      )
  }
}
