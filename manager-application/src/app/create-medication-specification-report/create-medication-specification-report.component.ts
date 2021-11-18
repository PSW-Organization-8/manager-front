import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateMedicationSpecificationReportService } from './create-medication-specification-report.service';

@Component({
  selector: 'app-create-medication-specification-report',
  templateUrl: './create-medication-specification-report.component.html',
  styleUrls: ['./create-medication-specification-report.component.css']
})
export class CreateMedicationSpecificationReportComponent implements OnInit {

  pharmacyName: string="";
  medicationName: string="";
  constructor(private service: CreateMedicationSpecificationReportService, private toastr: ToastrService) { }
  pharmacies: any;
  ngOnInit(): void {
    this.getAllPharmacy();
  }
  getAllPharmacy(): void{
    this.service.getPharmacyFromServer().subscribe(f => this.pharmacies = f);
 }
 requestReport(): void{

  if(this.medicationName=="" || this.pharmacyName=="")  this.toastr.error('There is an error')
  else{ 
  this.service.requestReportToServer(this.pharmacyName,this.medicationName).subscribe(
    (data) => {
      this.toastr.success('Successfully send objection to pharmacy')
    },
    (error) => {
      this.toastr.error('There is an error')
    })
}
}

}
