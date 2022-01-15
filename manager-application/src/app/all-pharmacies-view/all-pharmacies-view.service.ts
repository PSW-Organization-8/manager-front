import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { integrationServerPort } from '../app.consts';


@Injectable({
  providedIn: 'root'
})
export class AllPharmaciesViewService {

  private _url = integrationServerPort;
  private selectedPharmacy :any;

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  public getAllRegistratedPharmacies(): Observable<any>{
    return this.http.get<any>(this._url + 'pharmacy');
  }

  public openPharmacyProfile(pharmacy : any): void {
    this.selectedPharmacy = pharmacy;
    this.router.navigate(['pharmacyProfile/' + pharmacy.id])
  }

  public getSelectedPharmacy(): any {
    return this.selectedPharmacy;
  }
}
