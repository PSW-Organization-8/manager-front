import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors-workload',
  templateUrl: './doctors-workload.component.html',
  styleUrls: ['./doctors-workload.component.scss']
})
export class DoctorsWorkloadComponent implements OnInit {


  type = 'line';
  data = {
  labels: ["Number of appointments", "Number of patients"],
  datasets: [
    {
      label: "Data",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
  };
  options = {
  responsive: true,
  maintainAspectRatio: false
  };

  name: any;
  lastName: any;
  numberOfAppointments: any;
  numberOfPatients: any;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.queryParams.name);

    this.name = this.activatedRoute.snapshot.queryParams.name;
    this.lastName = this.activatedRoute.snapshot.queryParams.lastName;
    this.numberOfAppointments = this.getRandomInt(15);
    this.numberOfPatients = this.getRandomInt(19);

    this.data.datasets[0].data = [this.numberOfAppointments, this.numberOfPatients]
   }

  ngOnInit(): void {
  }

  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

}