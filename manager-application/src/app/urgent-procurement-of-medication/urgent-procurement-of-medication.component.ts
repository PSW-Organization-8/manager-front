import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Address } from './address';
import { MedicationOrderModel } from './medicationOrderModel';
import { Order } from './order';
import { UrgentProcurementOfMedicationService } from './urgent-procurement-of-medication.service';

@Component({
  selector: 'app-urgent-procurement-of-medication',
  templateUrl: './urgent-procurement-of-medication.component.html',
  styleUrls: ['./urgent-procurement-of-medication.component.css']
})
export class UrgentProcurementOfMedicationComponent implements OnInit {

  pharmacies: any;
  filteredPharmacies: any;

  constructor(private _urgentProcurementOfMedicationService: UrgentProcurementOfMedicationService,
    private toastr: ToastrService) { }

  medicationOrder = new MedicationOrderModel("", 0, "")
  pharmacyAddress = new Address("", "")
  error = false;

  ngOnInit(): void {
    this.getAllPharmacies();
  }

  getAllPharmacies() {
    this._urgentProcurementOfMedicationService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data
      for (let pharmacy of this.pharmacies) {
        pharmacy.state = 0
      }
    });
  }

  checkAvailability(event: any, pharmacyName: string) {
    for (let pharmacy of this.pharmacies) {
      if (pharmacy.name == pharmacyName) {
        pharmacy.state = 1 //loading
      }
    }
    this.medicationOrder.Pharmacy = pharmacyName;
    this._urgentProcurementOfMedicationService.checkAvailability(this.medicationOrder).subscribe(
      (data) => {
        if (data == null || data.length == 0) {
          this.toastr.error('There is no medicine with the entered name and quantity')
        }
        for (let pharmacy of this.pharmacies) {
          if (pharmacy.name == pharmacyName) {
            Object.keys(data).forEach((key: any) => console.log(pharmacy.pharmacies.push(data[key])));
          }
          pharmacy.state = 2 //disabled
          this.filter()
        }
      },
      (error) => {
        this.toastr.error('There is an error')
        for (let pharmacy of this.pharmacies) {
          if (pharmacy.name == pharmacyName) {
            pharmacy.state = 2 //disabled
          }
        }
      })
  }
  valueChanged() {
    if (this.pharmacies != undefined)
      for (let pharmacy of this.pharmacies) {
        pharmacy.pharmacies = []
        pharmacy.state = 0
      }
  }
  filter() {
    if (this.pharmacyAddress.City == "" && this.pharmacyAddress.Address == "") {
      this.filteredPharmacies = Object.create(this.pharmacies)
      this.error = false
      if (this.medicationOrder.Name == "") {
        this.error = true
      }
    }
    else {
      this.filteredPharmacies = []
      let has_med = false;
      for (let primaryPharmacy of this.pharmacies) {
        this.filteredPharmacies.push(Object.create(primaryPharmacy))
        this.filteredPharmacies[this.filteredPharmacies.length - 1].pharmacies = []
        for (let pharmacy of primaryPharmacy.pharmacies) {
          if (pharmacy.pharmacy.city.toLowerCase().includes(this.pharmacyAddress.City.toLowerCase()) && pharmacy.pharmacy.adress.toLowerCase().includes(this.pharmacyAddress.Address.toLowerCase())) {
            has_med = true;
            this.filteredPharmacies[this.filteredPharmacies.length - 1].pharmacies.push(Object.create(pharmacy))
          }
        }
      }
      this.error = !has_med
    }
  }
  order(event: any, primPharmacyName: string, pharmacyId: number, medicationId: number, medicationName: string) {
    let order = new Order(primPharmacyName, pharmacyId, medicationId, medicationName, this.medicationOrder.Quantity)
    this._urgentProcurementOfMedicationService.OrderMedicines(order).subscribe(
      (data) => {
        this.toastr.success('Successfully ordered medicines.')
        this.resetModels()
      },
      (error) => {
        this.toastr.error('There is an error')
      })
  }
  resetModels() {
    this.medicationOrder = new MedicationOrderModel("", 0, "")
    this.pharmacyAddress = new Address("", "")
    this.valueChanged()
  }
}


