import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

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

  getCourse(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.url + '/courses');
  }

  getCourseDetailsById(id:any):Observable<Course>{
    const params = new HttpParams().set("id",id);
    return this.httpClient.get<Course>(this.url + '/Getcourses',{'params': params})
  }
}
