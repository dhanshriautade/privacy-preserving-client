import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class sodeService {
    constructor(private httpClient: HttpClient, private router: Router) { }
    login(param: any): Observable<any> {
        return this.httpClient.post(environment.login, param)
    }
    register(param: any): Observable<any> {
        return this.httpClient.post(environment.register, param)
    }

}