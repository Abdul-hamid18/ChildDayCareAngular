import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Services } from './services';

@Injectable({
  providedIn: 'root'
})
export class ServicesServiceService {

  private baseURL = "http://localhost:8080/api/v1/services";

  constructor(private httpClient: HttpClient,private router:Router) { }

  getServices(): Observable<Services[]>{
    return this.httpClient.get<Services[]>(`${this.baseURL}`);
  }

  getServiceById(id: number): Observable<Services>{
    return this.httpClient.get<Services>(`${this.baseURL}/${id}`);
  }

  createService(service: ServicesServiceService): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, service);
  }

  deleteService(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateServices(id: number, services: Services): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, services);
  }
 
}
