package The_Bridge.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import The_Bridge.Entities.Contact;
import The_Bridge.Services.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact submitContact(@RequestBody Contact contactSubmission) {
        return contactService.saveSubmission(contactSubmission);
    }
}
