import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { integrationServerPort } from './app.consts';
import { hospitalServerPort } from './app.consts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = hospitalServerPort;

  constructor(private http: HttpClient) { }

  getBuildings() {
    return this.http.get(this.baseURL + 'building');
  }

  getRooms() {
    return this.http.get(this.baseURL + 'room');
  }

  getFloors() {
    return this.http.get(this.baseURL + 'floor');
  }

  getEquipments() {
    return this.http.get(this.baseURL + 'equipment');
  }

  getMoveEquipments() {
    return this.http.get(this.baseURL + 'moveEquipment');
  }
  
  getRoom(id: any) {
    return this.http.get(this.baseURL + 'room/' + id);
  }

  

  getShift(id : any) {
    return this.http.get(this.baseURL + "shift/" + id);
  }
  getVacation(id : any) {
    return this.http.get(this.baseURL + "vacation/" + id);
  }

  getDoctor(id : any) {
    return this.http.get(this.baseURL + "doctor/" + id);
  }

  editShift(data : any) {
    return this.http.put(this.baseURL + "shifts/edit", data);
  }

  editDoctorShift(shiftID: any, doctorID: any) {
    return this.http.put(this.baseURL + 'editDoctorShift/' + shiftID + '/' + doctorID, {});
  }
  getShifts()
  {
    return this.http.get(this.baseURL + "shift");
  }

  getVacations()
  {
    return this.http.get(this.baseURL + "vacation");
  }
  getDoctors()
  {
    return this.http.get(this.baseURL + "doctor/allDoctors");
  }
  getEquipment(id: any) {
    return this.http.get(this.baseURL + 'equipment/' + id);
  }
  getSearchTerm(id: any) {
    return this.http.get(this.baseURL + 'search/' + id);
  }
  postSubmitRelocation(data: any) {
    return this.http.post(this.baseURL + 'submitRelocation' ,data);
  }



}
