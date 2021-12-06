import { Injectable } from '@angular/core';
import { integrationServerPort } from '../app.consts';
import { MedicationConsumptionDates } from './MedicationConsumptionDates';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateMedicationConsumptionReportService {
 

  private _url = integrationServerPort;
  constructor(private http: HttpClient) { }

  public createMedicationConsumptionDates(medicationConsumptionDates : MedicationConsumptionDates){
    
    return this.http.post(this._url + 'medicationConsumption', medicationConsumptionDates);
  }
}
