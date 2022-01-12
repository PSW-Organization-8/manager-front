import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { MoveEquipmentService } from '../move-equipment/moveEquipment.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  units = {
    mapOfTheHospitalComplex: 1,
    mainHospitalBuilding: 2,
    laboratory: 3,
    ambulance: 4,
    parkingLot: 5,

    mainHospitalBuildingFloor1: 6,
    mainHospitalBuildingFloor2: 7,

    laboratoryFloor1: 8,

    ambulanceFloor1: 9,
    ambulanceFloor2: 10,

    parking:11,
    park: 12,
    backBotton: 13,
    floorButton: 14,

  }

  buildings: any;
  rooms: any;
  floors : any;
  equipments : any;

  currentUnit = 1
  selectedItem = 0;
  formState = 0;
  movedEquipments : any;

  equipmentName: any;
  equipmentId: any;
  startingRoom: any;
  amountEquipment: any;
  destinationRoom: any;
  relocationTime: any;
  durationRelocation: any;
  eqID : any;
  startRoomID : any;
  desRoomID : any;

  renovateState:any;
  renovate: any;
  renovateType: any;
  renovationSubmitState: any;

  constructor(private apiService: ApiService) 
  {
    this.renovateState = 0;
    this.renovate = false;
    this.renovateType = 'MERGE';
    this.renovationSubmitState = 'NORMAL'
  }

  ngOnInit(): void {

    this.apiService.getBuildings().subscribe((response : any) => {

      this.buildings = response;
    })

    this.apiService.getRooms().subscribe((response : any) => {

      this.rooms = response;
    })

    this.apiService.getFloors().subscribe((response : any) => {

      this.floors = response;
    })

    this.apiService.getEquipments().subscribe((response : any) => {

      this.equipments = response;
    })

    this.apiService.getMoveEquipments().subscribe((response : any) => {
    
      this.movedEquipments = response;
    })
  }


  itemClick(item:any) {
    console.log(item)
    this.selectedItem = item;
    let eqip = this.getEquipmentsForRoom(item);
    let moveEqip = this.getMoveEquipmentsForRoom(item);

    if(eqip) {
      this.equipmentName = eqip[0].name
      this.startingRoom = eqip[0].room.name
      this.amountEquipment = eqip[0].amount
      this.eqID = eqip[0].id
      this.startRoomID = eqip[0].room.id

       }

     if(moveEqip) {
       this.destinationRoom = moveEqip[0].room.name
       this.relocationTime = moveEqip[0].relocationTime
       this.durationRelocation = moveEqip[0].duration
       this.desRoomID = moveEqip[0].room.id
     }  

    


  }


  getBuildingById(id: any) {

    if(!this.buildings) {
      return undefined;
    }

    return this.buildings.find((x : any) => x.id === id);
  }

  getRoomById(id: any) {

    if(!this.rooms) {
      return undefined;
    }

    return this.rooms.find((x : any) => x.id === id);
  }

  getFloorById(id: any) {

    if(!this.floors) {
      return undefined;
    }

    return this.floors.find((x : any) => x.id === id);
  }

  getEquipmentById(id: any) {

    if(!this.equipments) {
      return undefined;
    }

    return this.equipments.find((x : any) => x.id === id);
  }

  getMoveEquipmentById(id: any) {

    if(!this.movedEquipments) {
      return undefined;
    }

    return this.movedEquipments.find((x : any) => x.id === id);
  } 

  getEquipmentsForRoom(id: any) {
    if(!this.equipments) {
      return [];
    }
    
    return this.equipments.filter((x : any) => x.room && x.room.id === id);

  }

  getMoveEquipmentsForRoom(id: any) {
    if(!this.movedEquipments) {
      return [];
    }
    
    return this.movedEquipments.filter((x : any) => x.room && x.room.id === id);

  }

  
   postSubmitRelocationEquipment()
   {
    console.log(this.equipmentId)
    this.apiService.postSubmitRelocation({

      
      ideq: this.equipmentId ? this.equipmentId : -1,
      idroom: parseInt(this.startRoomID),
      amount: this.amountEquipment ? parseFloat(this.amountEquipment) : -1,
      destinationRoom : this.desRoomID ? parseInt(this.desRoomID) : -1,
      duration : this.durationRelocation
     

    }).subscribe((response : any) => {
       
      this.movedEquipments = response;
    })
   }

   renovationSubmit() {

    if(this.renovateType == 'MERGE') {
      this.renovationSubmitState = 'MERGED';
    }
    else {
      this.renovationSubmitState = 'SPLITED';
    }
   }

   renovation1Submit() {

    if(this.renovateType == 'MERGE') {
      this.renovationSubmitState = 'MERGED';
    }
    else {
      this.renovationSubmitState = 'SPLITED';
    }
   }

   clickRenovate() {
     this.renovate = true;
     this.renovateState = 1;
   }
  

  changeUnit(unit: any) {
    this.currentUnit = unit
  }

  isUnitSelected(unit: any) {
    return this.currentUnit == unit
  }

  nextFormState() {

  if(this.renovate) {
    this.renovateState = this.renovateState + 1;
  }
  else {
    this.formState = this.formState+1;
  }
    
  }

  backFormState()
  {
    if(this.renovate) {
      this.renovateState = this.renovateState - 1;
    }
    else {
      this.formState = this.formState-1;
    }
  }

  setFormState()
  {
    return this.formState=1;
  }

  setNewFormState()
  {
    return this.formState=8;
  }

 
 

}




