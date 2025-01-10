@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    @ManyToMany
    private List<Pizza> pizzas;
    private LocalDateTime orderTime;
    private String status;
    // Getters and setters