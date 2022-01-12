
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-move-equipment',
  templateUrl: './moveEquipment.component.html',
  styleUrls: ['./moveEquipment.component.css']
})
export class MoveEquipmentComponent  {
  title = 'manager-application';


  id = -1;
  equipment: any;
  rooms: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) 
  {
    console.log(this.activatedRoute.snapshot.queryParams.id);
    
    this.apiService.getEquipment(this.activatedRoute.snapshot.queryParams.id)
    .subscribe((response :any) => {

      this.equipment = response;
      console.log(this.equipment)
    });

    this.apiService.getRooms()
    .subscribe((response: any) => {
      this.rooms = response;
      console.log(this.rooms)
     }); 


 }

}



