import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllPharmaciesViewService } from '../all-pharmacies-view/all-pharmacies-view.service';
import { integrationServerPort } from '../app.consts';
import { PharmacyProfileService } from './pharmacy-profile.service';

@Component({
  selector: 'app-pharmacy-profile',
  templateUrl: './pharmacy-profile.component.html',
  styleUrls: ['./pharmacy-profile.component.css']
})
export class PharmacyProfileComponent implements OnInit {

  selectedPharmacy : any;
  id : any;
  photoName: string = '';
  img : any;
  private _url = integrationServerPort;

  constructor(private route: ActivatedRoute, private service : PharmacyProfileService, private http : HttpClient, private toastr : ToastrService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPharmacy();
    })
  }

  getPharmacy() {
    this.service.getPharmacyById(this.id).subscribe(
      (response) => {
        this.selectedPharmacy = response;
        this.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    +  this.selectedPharmacy.base64Image);
      },
      (error) => {
        this.toastr.error('Error');
      }
    );
  }

  updatePharmacy(): void {
    this.service.updatePharmacy(this.selectedPharmacy);
  }

  uploadPhoto(ev: Event): void {
    const target= ev.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.photoName = file.name;
    //this.img = this.service.uploadPhoto(file, this.selectedPharmacy.id);
    let photo = new FormData();
    photo.append('image', file);

    this.http.post<any>(this._url + 'pharmacy/uploadPharmacyImage?id=' + this.selectedPharmacy.id, photo).subscribe(
      (response) => {
        this.toastr.success('Successfully uploaded photo.');
        this.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + response.base64Image);
      },
      (error) => {
        this.toastr.error('Error while uploading photo.');
      }
    );
  }
}
