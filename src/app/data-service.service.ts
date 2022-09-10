import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  checkLogin(user:any){
    alert("service method called");

    return this.httpClient.post(this.url + '/users/' + user.email, user);

  }

  createNewUser(user:any){

    return this.httpClient.post(this.url + '/createUser', user);

  }
}
