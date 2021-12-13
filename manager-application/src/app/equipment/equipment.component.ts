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
  equipmentsToShow : any;
  searchTerm : any;

  constructor(private apiService: ApiService) { }

ngOnInit(): void {

  this.searchTerm = '';
  this.apiService.getEquipments().subscribe((response : any) => {
  
    this.equipments = response;
    this.equipmentsToShow = response;
    console.log(this.equipments);
  })

}

getEquipmentById(id: any) {

  if(!this.equipments) {
    return undefined;
  }

  return this.equipments.find((x : any) => x.id === id);
} 


search() {
  this.equipmentsToShow = [];
  
  for(let item of this.equipments) {
    

    console.log(item, this.searchTerm,item.name.includes(this.searchTerm))

    if(item && item.name && item.name.includes(this.searchTerm)) {
      this.equipmentsToShow.push(item);
    }


  }

}
}




