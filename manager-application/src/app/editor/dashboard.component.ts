import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private apiService: ApiService) { }

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

  changeUnit(unit: any) {
    this.currentUnit = unit
  }

  isUnitSelected(unit: any) {
    return this.currentUnit == unit
  }

}




