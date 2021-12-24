import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { integrationServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(private http: HttpClient) { }

  saveTender(tenderData: any) {
    return this.http.post(integrationServerPort + "Tendering/tenders", tenderData)
  }

  getAll(){
    return this.http.get(integrationServerPort + "Tendering/tenders")
  }

  closeTender(id: any) {
    return this.http.put(integrationServerPort + "Tendering/tenders?id=" + id, null)
  }

  getAllOffers(tenderId:any){
    return this.http.get(integrationServerPort + "Tendering/offers/getAllByTenderId?id=" + tenderId)
  }
  acceptOffer(offer: any) {
    return this.http.put(integrationServerPort + "Tendering/offers?id=" + offer.id, null)
  }
}
