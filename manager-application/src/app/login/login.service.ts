import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { hospitalServerPort } from "../app.consts";

@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    private _url = hospitalServerPort;
    constructor(private http: HttpClient, private router:Router) {}

    public getLoggedUserFromServer(token:any): Observable<any> {
      let result = token.slice(1,-1);
      let header = new HttpHeaders().set("Authorization", 'Bearer ' + result);
        return this.http.get<any>(this._url + 'manager/login', {headers:header});
    }

    public sendLoginFormToServer(username: any, password: any) {
        let loginForm = {
            username: username,
            password: password,
          };
          return this.http.post<any>(this._url + 'login/managerLogin', loginForm);
    }
}