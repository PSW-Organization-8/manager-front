import { Component, OnInit } from '@angular/core';
import { AllObjectionsViewService } from './all-objections-view.service';

@Component({
  selector: 'app-all-objections-view',
  templateUrl: './all-objections-view.component.html',
  styleUrls: ['./all-objections-view.component.css']
})
export class AllObjectionsViewComponent implements OnInit {

  objections: any;
  toastr: any;
  

  constructor(private service: AllObjectionsViewService) { }

  ngOnInit(): void {
    this.getAllObjections();
  }

  getAllObjections(): void{
    this.service.getAllObjectionsFromServer().subscribe(objection =>{ this.objections = objection;
    console.log(objection)}, (error)=>{this.toastr.error("Service unavailable");}
     );
  }

}
