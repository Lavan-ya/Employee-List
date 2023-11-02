import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
employee: Employee = new Employee;
constructor(private employeeService : EmployeeService, private router:Router , private route:ActivatedRoute){}
id!:number;
ngOnInit():void{
this.id = this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    console.log(data);
   this.employee=data;
  })
}

onSubmit(){
  this.employeeService.updateEmployee(this.employee.id,this.employee).subscribe(data=>{
    this.router.navigate(['employees']);
  })
}
}
