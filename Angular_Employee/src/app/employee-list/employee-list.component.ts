import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];
  constructor(private employeeService : EmployeeService, private router:Router){
  }

  ngOnInit():void{
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  change(id : number){
this.router.navigate(['update-employee',id]);
  }

  delete(id : number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      alert("Deleted the record successfully");
      this.getEmployees();
    })   
  }
}
