package The_Bridge.Backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import The_Bridge.Backend.Entities.Contact;
import The_Bridge.Backend.Repositories.ContactRepository;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    public Contact submitContactForm(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getAllSubmissions() {
        return contactRepository.findAll();
    }
}
