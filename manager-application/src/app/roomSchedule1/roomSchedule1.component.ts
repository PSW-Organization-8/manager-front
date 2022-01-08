import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-roomSchedule1',
  templateUrl: './roomSchedule1.component.html',
  styleUrls: ['./roomSchedule1.component.scss']
})
export class RoomSchedule1Component  {
  title = 'manager-application';
  

  rooms : any;
  

  constructor(private apiService: ApiService) { }

ngOnInit(): void {


  this.apiService.getRooms().subscribe((response : any) => {
  
    this.rooms = response;

    console.log(this.rooms);
  })

}

getRoomById(id: any) {

  if(!this.rooms) {
    return undefined;
  }

  return this.rooms.find((x : any) => x.id === id);
} 



}