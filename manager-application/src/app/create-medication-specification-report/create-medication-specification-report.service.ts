import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class CreateMedicationSpecificationReportService {
  

  private _url = integrationServerPort;
  constructor(private http: HttpClient) { }

  public getPharmacyFromServer(): Observable<any> {
    return this.http.get<any>(this._url + 'Pharmacy');
  }
  public requestReportToServer(pharmacyName: string, medicationName:string){
    let medicationSpecification = {
      PharmacyName: pharmacyName,
      MedicationName: medicationName
    };
    return this.http.post(this._url + 'medicationSpecification', medicationSpecification);
   };
}
