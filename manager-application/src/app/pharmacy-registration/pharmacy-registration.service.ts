import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { integrationServerPort } from '../app.consts';
import { Pharmacy } from './pharmacy';

@Injectable({
  providedIn: 'root'
})
export class PharmacyRegistrationService {
  private _url = integrationServerPort
  constructor(private http: HttpClient) { }
  
  public registerPharmacy(pharmacy: Pharmacy){
    return this.http.post(this._url + 'Pharmacy', pharmacy)
  };

}
