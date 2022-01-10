import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:16934"

  constructor(private http: HttpClient) { }

  getBuildings() {
    return this.http.get(this.baseURL + '/api/building');
  }

  getRooms() {
    return this.http.get(this.baseURL + '/api/room');
  }

  getFloors() {
    return this.http.get(this.baseURL + '/api/floor');
  }

  getEquipments() {
    return this.http.get(this.baseURL + '/api/equipment');
  }

  getMoveEquipments() {
    return this.http.get(this.baseURL + '/api/moveEquipment');
  }

  
  getRoom(id: any) {
    return this.http.get(this.baseURL + '/api/room/' + id);
  }

  getShift(id : any) {
    return this.http.get(this.baseURL + "/api/shift/" + id);
  }


  getShifts()
  {
    return this.http.get(this.baseURL + "/api/shift");
  }

  getDoctors()
  {
    return this.http.get(this.baseURL + "/api/doctor/allDoctors");
  }


  getEquipment(id: any) {
    return this.http.get(this.baseURL + '/api/equipment/' + id);
  }

  getSearchTerm(id: any) {
    return this.http.get(this.baseURL + '/api/search/' + id);
  }

  postSubmitRelocation(data: any) {
    return this.http.post(this.baseURL + '/api/submitRelocation' ,data);
  }



}
