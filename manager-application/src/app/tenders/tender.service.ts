import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(private http: HttpClient) { }

  saveTender(tenderData: any) {
    return this.http.post(integrationServerPort + "Tendering", tenderData)
  }

  getAll(){
    return this.http.get(integrationServerPort + "Tendering")
  }

  closeTender(id: any) {
    return this.http.put(integrationServerPort + "Tendering?id=" + id, null)
  }
}
