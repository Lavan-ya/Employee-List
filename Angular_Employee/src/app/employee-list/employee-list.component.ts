import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];
  constructor(private employeeService : EmployeeService){
  }

  ngOnInit():void{
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }
}
