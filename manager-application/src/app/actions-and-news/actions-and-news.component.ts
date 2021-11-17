import { Component, OnInit } from '@angular/core';
import { ActionsAndNewsService } from './actions-and-news.service';
import { News } from './news';

@Component({
  selector: 'app-actions-and-news',
  templateUrl: './actions-and-news.component.html',
  styleUrls: ['./actions-and-news.component.css']
})
export class ActionsAndNewsComponent implements OnInit {

  actions = new Array<News>();

  constructor(private service: ActionsAndNewsService) { }

  ngOnInit(): void {
    this.getAllActionsAndNews();
  }

  getAllActionsAndNews(): void{
    this.service.getAllActionsAndNews().subscribe(response =>{ this.actions = response;});
  }

  approveNews(action : News) {
    this.service.approveNews(action);
  }

  unApproveNews(action : News) {
    this.service.unApproveNews(action);
  }
}
