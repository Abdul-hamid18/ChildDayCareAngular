import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Babysitter } from './Babysitter';

@Injectable({
  providedIn: 'root'
})
export class BabysitterService {

  private baseURL = "http://localhost:8080/api/v1/babysitters";

  constructor(private httpClient: HttpClient,private router:Router) { }

  getBabysitter(): Observable<Babysitter[]>{
    return this.httpClient.get<Babysitter[]>(`${this.baseURL}`);
  }

  getBabysitterById(id: number): Observable<Babysitter>{
    return this.httpClient.get<Babysitter>(`${this.baseURL}/${id}`);
  }

  createBabysitter(babysitter: Babysitter): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, babysitter);
  }

  deleteBabysitter(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateBabysitter(id: number, babysitter: Babysitter): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, babysitter);
  }

}