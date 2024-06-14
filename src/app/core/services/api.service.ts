import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5204';

  constructor(private http: HttpClient) { }

  getAstronautDutyByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/AstronautDuty/${name}`);
  }

  createAstronautDuty(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/AstronautDuty`, data);
  }

  getPeople(): Observable<{ people: Person[], success: boolean, message: string, responseCode: number }> {
    return this.http.get<{ people: Person[], success: boolean, message: string, responseCode: number }>(`${this.baseUrl}/Person`);
  }

  createPerson(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Person`, data);
  }

  getPersonByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/Person/${name}`);
  }
}