import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { ManagerService } from 'src/app/login/manager.service';
import { AllFeedbackViewService } from './all-feedback-view.service';

@Component({
  selector: 'app-all-feedback-view',
  templateUrl: './all-feedback-view.component.html',
  styleUrls: ['./all-feedback-view.component.css']
})
export class AllFeedbackViewComponent implements OnInit {

  feedbacks: any;
  manager: any;

  constructor(private _allFeedbackViewService: AllFeedbackViewService, private _loginService: LoginService, private _managerService: ManagerService) { }

  ngOnInit(): void {
    this.getLoggedUser();
    this.getAllFeedbacks();
  }

  getLoggedUser(){
    let token = localStorage.getItem('token');
    if(token === null)
      token = ""
    this._loginService.getLoggedUserFromServer(token).subscribe(f=> {
      this.getManager(f.username)
    }
    );
  }

  getManager(username:any): void{
    this._managerService.getManagerByUsernameFromServer(username).subscribe(
      (successData: any) => {  this.manager = successData },
      () => {},
      () => {}
      );
  }

  getAllFeedbacks(): void{
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._allFeedbackViewService.getFeedbackFromServer(token).subscribe(f => this.feedbacks = f);

    let a = this.feedbacks;
  }

  aprroveFeedback(feedbackId: string): void {
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._allFeedbackViewService.approveFeedback(feedbackId, token).subscribe(() => this.getAllFeedbacks());
  }

  removeFeedback(feedbackId: string): void {
    let token = localStorage.getItem('token');
      if(token === null)
        token = ""

    this._allFeedbackViewService.removeFeedback(feedbackId, token).subscribe(() => this.getAllFeedbacks());
  }
}
