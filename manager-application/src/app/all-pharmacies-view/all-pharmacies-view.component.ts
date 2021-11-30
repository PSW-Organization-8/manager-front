import { Component, OnInit } from '@angular/core';
import { AllPharmaciesViewService } from './all-pharmacies-view.service';

@Component({
  selector: 'app-all-pharmacies-view',
  templateUrl: './all-pharmacies-view.component.html',
  styleUrls: ['./all-pharmacies-view.component.css']
})
export class AllPharmaciesViewComponent implements OnInit {

  pharmacies: any;

  constructor(private service : AllPharmaciesViewService) { }

  ngOnInit(): void {
    this.getAllRegistratedPharmacies();
  }

  getAllRegistratedPharmacies(): void{
    this.service.getAllRegistratedPharmacies().subscribe(response => { this.pharmacies = response})
  }

  openPharmacyProfile(pharmacy : any): void {
    this.service.openPharmacyProfile(pharmacy);
  }

}
