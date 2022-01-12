import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateMedicationSpecificationReportService } from './create-medication-specification-report.service';
import Swal from 'sweetalert2';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-create-medication-specification-report',
  templateUrl: './create-medication-specification-report.component.html',
  styleUrls: ['./create-medication-specification-report.component.css']
})
export class CreateMedicationSpecificationReportComponent implements OnInit {

  pharmacyName: string="";
  medicationName: string="";
  fileName: string="";
  constructor(private service: CreateMedicationSpecificationReportService, private toastr: ToastrService,private notificationService: NotificationService) { }
  pharmacies: any;
  Title=""
  Read=false
  ContentNotification=""
  FileName =""

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
    (response:any) => {
      this.fileName=response.fileName;
      alert(this.fileName);
      Swal.fire('New pdf file', 'You have new medication specification pdf file. Please read notification!', 'info');
      this.Title="New medication specification pdf file"
      this.Read=false
      this.ContentNotification="You have new file in your integration folder"
      this.FileName =this.fileName
       this.notificationService.SaveNotification(this.Title,this.Read,this.ContentNotification,this.FileName).subscribe(
      (data) => {
        this.toastr.success('Successfully save notification')
      },
      (error) => {
        this.toastr.error('There is an error')
      }
    )
    },
    (error) => {
      this.toastr.error('There is an error')
    })
}
}

}
