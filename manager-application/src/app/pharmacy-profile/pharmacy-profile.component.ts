import { Component, OnInit } from '@angular/core';
import { AllPharmaciesViewService } from '../all-pharmacies-view/all-pharmacies-view.service';
import { PharmacyProfileService } from './pharmacy-profile.service';

@Component({
  selector: 'app-pharmacy-profile',
  templateUrl: './pharmacy-profile.component.html',
  styleUrls: ['./pharmacy-profile.component.css']
})
export class PharmacyProfileComponent implements OnInit {

  selectedPharmacy : any;

  constructor(private allPharmaciesService : AllPharmaciesViewService, private service : PharmacyProfileService) { }

  ngOnInit(): void {
    this.selectedPharmacy = this.allPharmaciesService.getSelectedPharmacy();
  }

  updatePharmacy(): void {
    this.service.updatePharmacy(this.selectedPharmacy);
  }
}
