package com.majestypizza.pizzaapp.controller;

@RestController
@RequestMapping("/api/pizzas")
public class PizzaController {
    @Autowired
    private PizzaService pizzaService;

    @GetMapping
    public List<Pizza> getAllPizzas() {
        return pizzaService.getAllPizzas();
    }
    // Other endpoints
}