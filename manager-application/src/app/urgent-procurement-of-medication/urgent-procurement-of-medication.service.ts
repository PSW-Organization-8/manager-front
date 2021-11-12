import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';
import { MedicationOrderModel } from './medicationOrderModel';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class UrgentProcurementOfMedicationService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient) { }

  getAllPharmacies() {
    return this.http.get<any>(this._url + 'Pharmacy');
  }

  checkAvailability(medicationOrder: MedicationOrderModel) {
    let params = new HttpParams()
      .set('Name', medicationOrder.Name)
      .set('Quantity', medicationOrder.Quantity)
      .set('Pharmacy', medicationOrder.Pharmacy)
    return this.http.get<Object[]>(this._url + 'Medication/check_medication_availability', { params: params })
  }

  OrderMedicines(order: Order) {
    return this.http.put(this._url + 'Medication/order_medication', order)
  }
}
