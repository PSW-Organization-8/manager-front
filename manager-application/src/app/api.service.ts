import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:7313"

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
}
