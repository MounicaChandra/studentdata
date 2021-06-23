import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {

  constructor(private http:HttpClient) { }

  get(url:string){
      return this.http.get(url)
  }
  post(url:string, body){
    return this.http.post(url,body)
  }
}
