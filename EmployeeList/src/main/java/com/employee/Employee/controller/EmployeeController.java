package com.employee.Employee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employee.Employee.exception.ResourceNotFoundException;
import com.employee.Employee.model.Employee;
import com.employee.Employee.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable Long id) {
		return this.employeeRepository.findById(id);
	}

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails) {
		Employee employee = this.employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Error"));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		employeeRepository.save(employee);
		return ResponseEntity.ok(employee);
	}

	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable long id) {
		Employee employee = this.employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Error"));
		this.employeeRepository.delete(employee);
	}
}
