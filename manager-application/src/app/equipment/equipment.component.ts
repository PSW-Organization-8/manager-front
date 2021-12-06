import { Component } from '@angular/core';

import { ApiService } from '../api.service';



@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent  {
  title = 'manager-application';
  

  equipments : any;
  searchTerm : any;

  constructor(private apiService: ApiService) { }

ngOnInit(): void {


  this.apiService.getEquipments().subscribe((response : any) => {
  
    this.equipments = response;

    console.log(this.equipments);
  })

}

getEquipmentById(id: any) {

  if(!this.equipments) {
    return undefined;
  }

  return this.equipments.find((x : any) => x.id === id);
} 



}




