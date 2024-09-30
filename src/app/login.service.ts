import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl:String = "http://localhost:8080/login"

  constructor(private httpClient:HttpClient) { }
  getLogin():Observable<any>{
    return this.httpClient.get<Observable<any>>(`${this.loginUrl}`);
  }
  addLogin(login:Login):Observable<any>{
    return this.httpClient.post<Observable<any>>(`${this.loginUrl}`,login);
  }
}
