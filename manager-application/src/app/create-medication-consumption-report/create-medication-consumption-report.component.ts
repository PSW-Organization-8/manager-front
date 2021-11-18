import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateMedicationConsumptionReportService } from './create-medication-consumption-report.service';
import { MedicationConsumptionDates } from './MedicationConsumptionDates';

@Component({
  selector: 'app-create-medication-consumption-report',
  templateUrl: './create-medication-consumption-report.component.html',
  styleUrls: ['./create-medication-consumption-report.component.css']
})
export class CreateMedicationConsumptionReportComponent implements OnInit {

  constructor(private service: CreateMedicationConsumptionReportService,
    private toastr: ToastrService) {}
    
    model = new MedicationConsumptionDates(new Date(-8640000000000000), new Date(-8640000000000000));

  ngOnInit(): void {

  }
  onSubmit(): void {
    this.model.DurationStart = new Date(this.model.DurationStart)
    this.model.DurationEnd = new Date(this.model.DurationEnd)
    
    if (!this.validInputs()){

      return;
    }
    

    this.service.createMedicationConsumptionDates(this.model).subscribe(
      (date) => {
        this.toastr.success('Successfully created report')
        this.model = new MedicationConsumptionDates(new Date, new Date)
      },
      (error) => {
        this.toastr.error('There is an error')
      }
    )
  }

  isValidDate(d: any): boolean {
    return d instanceof Date && !isNaN(d.getTime());
  }

  resetDateRange(): void{
    this.model.DurationStart = new Date(-8640000000000000)
    this.model.DurationEnd = new Date(-8640000000000000)
  }
   
  validInputs(): boolean {
    
    if (this.isValidDate(this.model.DurationEnd) && this.isValidDate(this.model.DurationEnd)) {
      let minYear = new Date(-8640000000000000).getFullYear()
      if (this.model.DurationStart > this.model.DurationEnd || minYear == this.model.DurationStart.getFullYear() || minYear == this.model.DurationEnd.getFullYear() || this.model.DurationEnd> new Date()) {
        this.toastr.error('Date range is invalid')
        this.resetDateRange()
        return false;
      }
    } else {
      this.toastr.error('Date range is invalid')
        this.resetDateRange()
        return false;
    }
    return true;
  }

}
