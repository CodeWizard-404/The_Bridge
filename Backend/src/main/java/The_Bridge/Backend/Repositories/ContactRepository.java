package The_Bridge.Backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import The_Bridge.Backend.Entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {}
 