import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { hospitalServerPort } from "../app.consts";

@Injectable({
    providedIn: 'root',
  })
  export class ManagerService {
    private _url = hospitalServerPort;
    constructor(private http: HttpClient, private router:Router) {}

    public getManagerByUsernameFromServer(username: string): any {
      return this.http.get<any>(this._url + 'manager/getByUsername/' + username);
    }
  }