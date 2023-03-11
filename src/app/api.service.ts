import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addBook=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addBook",data)
  }
  viewBook=()=>
  {
    return this.http.get("http://localhost:8080/viewAll")
  }
  seaechBook=(data:any)=>
  {
    return this.http.post("http://localhost:8080/search",data)
  }
}
