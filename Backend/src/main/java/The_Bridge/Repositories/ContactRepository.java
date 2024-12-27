package The_Bridge.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import The_Bridge.Entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {}