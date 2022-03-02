import { Component, OnInit } from '@angular/core';
import { AllPharmaciesViewService } from './all-pharmacies-view.service';

@Component({
  selector: 'app-all-pharmacies-view',
  templateUrl: './all-pharmacies-view.component.html',
  styleUrls: ['./all-pharmacies-view.component.css']
})
export class AllPharmaciesViewComponent implements OnInit {

  pharmacies: any;
  toastr: any;

  constructor(private service : AllPharmaciesViewService) { }

  ngOnInit(): void {
    this.getAllRegistratedPharmacies();
  }

  getAllRegistratedPharmacies(): void{
    this.service.getAllRegistratedPharmacies().subscribe(
      response => {
        this.pharmacies = response
        for (let pharmacy of this.pharmacies) {
          pharmacy.base64Image = 'data:image/jpg;base64,' + pharmacy.base64Image;
        }
      }, (error)=>{this.toastr.error("Service unavailable")})
  }

  openPharmacyProfile(pharmacy : any): void {
    this.service.openPharmacyProfile(pharmacy);
  }

}
