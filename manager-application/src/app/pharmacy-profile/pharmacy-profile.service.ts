import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class PharmacyProfileService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public updatePharmacy(pharmacy: any): any {
    return this.http.put<any>(this._url + 'pharmacy/updatePharmacy', pharmacy).subscribe(
      (response) => {
        this.toastr.success('Successfully updated');
      },
      (error) => {
        this.toastr.error('Error');
      }
    );
  }
}
