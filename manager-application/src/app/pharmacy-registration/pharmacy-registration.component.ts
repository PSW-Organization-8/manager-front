import { Component, OnInit } from '@angular/core';
import { PharmacyRegistrationService } from './pharmacy-registration.service';
import { Pharmacy } from './pharmacy';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacy-registration',
  templateUrl: './pharmacy-registration.component.html',
  styleUrls: ['./pharmacy-registration.component.css']
})
export class PharmacyRegistrationComponent implements OnInit {

  constructor(
    private pharmacyRegistrationService: PharmacyRegistrationService,
    private toastr: ToastrService
  ) { }

  model = new Pharmacy("", "", "", "", 0, false, false)

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.model.Port = this.model.PortNum.toString();
    this.pharmacyRegistrationService.registerPharmacy(this.model).subscribe(
      (data) => {
        this.toastr.success('Successfully registered a pharmacy')
        this.model = new Pharmacy("", "", "", "", 0, false, false)
      },
      (error) => {
        this.toastr.error('There is an error')
      })
  }

}
