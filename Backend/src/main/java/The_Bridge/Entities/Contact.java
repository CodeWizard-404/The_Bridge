package The_Bridge.Entities;


import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String message;

    @Temporal(TemporalType.TIMESTAMP)
    private Date submittedAt = new Date();

	public Contact(Long id, String name, String email, String message, Date submittedAt) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
		this.submittedAt = submittedAt;
	}

	public Contact() {
		super();
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

	public Date getSubmittedAt() {
		return submittedAt;
	}

	public void setSubmittedAt(Date submittedAt) {
		this.submittedAt = submittedAt;
	}
    
    
    
}
