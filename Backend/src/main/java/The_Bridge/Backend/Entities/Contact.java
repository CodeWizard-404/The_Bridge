package The_Bridge.Backend.Entities;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String message;
    private LocalDateTime submittedAt;

    @PrePersist
    public void prePersist() {
        submittedAt = LocalDateTime.now();
    }

	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Contact(Long id, String name, String email, String message, LocalDateTime submittedAt) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
		this.submittedAt = submittedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getSubmittedAt() {
		return submittedAt;
	}

	public void setSubmittedAt(LocalDateTime submittedAt) {
		this.submittedAt = submittedAt;
	}
    
    
	

}
