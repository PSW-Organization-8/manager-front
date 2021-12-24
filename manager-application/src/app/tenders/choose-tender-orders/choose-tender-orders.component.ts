import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-choose-tender-orders',
  templateUrl: './choose-tender-orders.component.html',
  styleUrls: ['./choose-tender-orders.component.css']
})
export class ChooseTenderOrdersComponent implements OnInit {

  pharmacyOffers: any;
  id: any;

  constructor(
    private tenderService: TenderService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.getAllOffers();
  }

  getAllOffers() {
    this.tenderService.getAllOffers(this.id).subscribe(
      (data)=>{
        this.pharmacyOffers = data
        this.setModals();
      },
      (error)=>{
        this.pharmacyOffers = []
      }
    )
  }

  setModals() {
    for(let offer of this.pharmacyOffers){
      offer.isModalActive = false;
    }
  }

  toggleModal(offer: any) {
    offer.isModalActive = !offer.isModalActive;
  }

  acceptOffer(offer: any){
    this.tenderService.acceptOffer(offer).subscribe(
      (data)=>{
        this.toastr.success("Successfully accepted pharmacy offer")
        this.router.navigate(["/tenders"])
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    )
  }

  totalPrice(offer: any){
    var totalPrice = 0
    for (const medication of offer.components) {
      totalPrice += medication.price
    }
    return totalPrice
  }
}
