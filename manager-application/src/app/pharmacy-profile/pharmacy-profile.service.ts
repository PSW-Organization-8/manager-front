import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { integrationServerPort } from '../app.consts';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PharmacyProfileService {

  private _url = integrationServerPort;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public getPharmacyById(pharmacyId: any) {
    return this.http.get(this._url + 'Pharmacy/pharmacyProfile?id=' + pharmacyId)
  }

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

  // ova metoda se za sada ne poziva vec je kopirana u komponenti
  public uploadPhoto(file: File, pharmacyId: string): void {
    let photo = new FormData();
    photo.append('image', file);

    this.http.post<any>(this._url + 'pharmacy/uploadPharmacyImage?id=' + pharmacyId, photo).subscribe(
      (response) => {
        this.toastr.success('Successfully uploaded photo.');
        return response;
      },
      (error) => {
        this.toastr.error('Greska');
      }
    );
  }
}
