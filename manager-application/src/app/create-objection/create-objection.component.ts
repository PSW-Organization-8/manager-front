import { Component, OnInit } from '@angular/core';
import { CreateObjectionService } from './create-objection.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-objection',
  templateUrl: './create-objection.component.html',
  styleUrls: ['./create-objection.component.css']
})
export class CreateObjectionComponent implements OnInit {
  
  pharmacyName: string="";
  textObjection: string="";

  pharmacies: any;

  constructor(private service: CreateObjectionService, private toastr: ToastrService) { }
 

  ngOnInit(): void {
    this.getAllPharmacy();
   
  }
  getAllPharmacy(): void{
     this.service.getPharmacyFromServer().subscribe(f => this.pharmacies = f);
  }

  sendObjection(): void{
    if(this.textObjection=="" || this.pharmacyName=="")  this.toastr.error('All fields must be filled')
    else{ 
    this.service.sendObjectionToServer(this.pharmacyName,this.textObjection).subscribe(
      (data) => {
        this.toastr.success('Successfully send objection to pharmacy')
      },
      (error) => {
        this.toastr.error(error.error)
      })
  }
}

}
