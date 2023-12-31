import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  postEmployee(employee :Employee):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number,employee : Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
  }
}
