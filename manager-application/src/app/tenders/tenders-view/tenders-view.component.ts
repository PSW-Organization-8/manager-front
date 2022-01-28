import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-tenders-view',
  templateUrl: './tenders-view.component.html',
  styleUrls: ['./tenders-view.component.css']
})
export class TendersViewComponent implements OnInit {

  constructor(private tenderService: TenderService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  tenders : any

  ngOnInit(): void {
    this.getAllTenders();
  }

  getAllTenders() {
    this.tenderService.getAll().subscribe(
      (data)=>{
        this.tenders = data
        this.setModals()
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    )
  }
  setModals() {
    for(let tender of this.tenders){
      tender.isModalActive = false;
    }
  }

  toggleModal(tender: any) {
    tender.isModalActive = !tender.isModalActive;
  }

  canClose(endDateString: string){
    if(endDateString == null || endDateString == ""){
      return true
    }

    let dateTimeSplited = endDateString.split("T")
    let date = dateTimeSplited[0].split("-")
    let time = dateTimeSplited[1].split(":")
    let dateTime = new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]), parseInt(time[0]), parseInt(time[1]), parseInt(time[2]))
    
    return dateTime >= new Date()
  }

  seeOffers(id: any){
    this.router.navigate(["/chooseOrder/" + id])
  }

  closeTender(tender: any){
    this.tenderService.closeTender(tender.id).subscribe(
      (data)=>{
        this.getAllTenders();
        this.toastr.success("Successfully closed tender")
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    )
  }
  
}
