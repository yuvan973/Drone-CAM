package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Media;
@Repository
public interface CustomerRepository extends JpaRepository<Media, Integer> {

}
