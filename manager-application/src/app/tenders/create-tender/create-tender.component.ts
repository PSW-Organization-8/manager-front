import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.css']
})
export class CreateTenderComponent implements OnInit {
  name = 'Angular';

  tenderForm: FormGroup;

  constructor(private fb: FormBuilder,
    private tenderService: TenderService,
    private toastr: ToastrService,
    private router: Router
  ) {

    this.tenderForm = this.fb.group({
      tenderName: '',
      complationDate: '',
      medications: this.fb.array([]),
    });
  }
  ngOnInit(): void {

  }

  medications(): FormArray {
    return this.tenderForm.get("medications") as FormArray
  }

  newMedication(): FormGroup {
    return this.fb.group({
      medicationName: '',
      quantity: 0,
    })
  }

  addMedication() {
    this.medications().push(this.newMedication());
  }

  removeMedication(i: number) {
    this.medications().removeAt(i);
  }

  sendTender() {
    if (this.tenderForm.value.tenderName == "") {
      this.toastr.error("Please, enter tender name")
    }
    else if (this.tenderForm.value.medications.length == 0) {
      this.toastr.error("Please, must add minimum one medication")
    }
    else if (this.someMedicationIsEmpty()) {
      this.toastr.error("Please, enter medication name and medication quantity to all medications")
    }
    else {
      this.tenderService.saveTender(this.tenderForm.value).subscribe(
        (data)=>{
          this.router.navigate(["/tenders"])
          this.toastr.success("Successfully opened tender")
        },
        (error) =>{
          this.toastr.error(error.error)
        }
      )
    }
  }

  someMedicationIsEmpty() {
    for (let medication of this.tenderForm.value.medications) {
      if (medication.medicationName == "" || medication.quantity == 0) {
        return true
      }
    }
    return false
  }



}
