package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Media;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository repository;
	
	public String addCustomer(Media customer) {
		repository.save(customer);
		return "Added";
	}
	
	public List<Media> getCustomer(){
		return repository.findAll();
	}

	public Optional<Media> getCustomerById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}
	public String updateCustomer(Media customer) {
		repository.save(customer);
		return "Updated";
	}

	public String deleteCustomerById(int id) {
		repository.deleteById(id);
		return "Family deleted";
	}

	
}
