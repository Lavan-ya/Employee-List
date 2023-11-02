import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
employee : Employee = new Employee();
constructor(private employeeService :EmployeeService, private router:Router){}
ngOnInit():void{

}

onSubmit(){
this.employeeService.postEmployee(this.employee).subscribe(data=>{
  alert("Added the record successfully");
  this.router.navigate(['employees']);
},error=>console.log(error));
}
}
