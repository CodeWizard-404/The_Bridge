package The_Bridge.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import The_Bridge.Backend.Entities.Contact;
import The_Bridge.Backend.Services.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact submitContactForm(@RequestBody Contact contact) {
        return contactService.submitContactForm(contact);
    }
}
