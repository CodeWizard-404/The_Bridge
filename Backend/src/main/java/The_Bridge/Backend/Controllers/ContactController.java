package The_Bridge.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import The_Bridge.Backend.Entities.Contact;
import The_Bridge.Backend.Services.ContactService;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Contact> getAllContacts() {
        return contactService.getAllSubmissions();
    }

    @PostMapping
    public Contact submitContactForm(@RequestBody Contact contact) {
        return contactService.submitContactForm(contact);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteContact(@PathVariable("id") Long id) {
        contactService.deleteContactById(id);
    }
}
