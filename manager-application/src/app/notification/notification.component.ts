import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications : any
  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.getAllNotification();
  }

  getAllNotification(): void{
    this.service.GetAllNotification().subscribe(response=>{ this.notifications = response;});
  }
  read(notification : Notification) {
    this.service.read(notification);
  }
}
