package com.majestypizza.pizzaapp.repository;

import com.majestypizza.pizzaapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends JpaRepository<User, Long> {}
