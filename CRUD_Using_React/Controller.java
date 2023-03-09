package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Media;
import com.example.demo.service.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService service;
	@CrossOrigin("*")
	@PostMapping("/customer")
	public String create(@RequestBody Media customer) {
		return service.addCustomer(customer);
	}
	@CrossOrigin("*")
	@GetMapping("/customer")
	public List<Media> read(){
		return service.getCustomer();
	}
	@CrossOrigin("*")
	@GetMapping("/customer/{id}")
	public Optional<Media> readById(@PathVariable int id){
		return service.getCustomerById(id);
	}
	@CrossOrigin("*")
	@PutMapping("/customer")
	public String update(@RequestBody Media customer) {
		return service.updateCustomer(customer);
	}
	@CrossOrigin("*")
	@DeleteMapping("/customer")
	public String delete(@RequestParam int id) {
		return service.deleteCustomerById(id);
	}

}
