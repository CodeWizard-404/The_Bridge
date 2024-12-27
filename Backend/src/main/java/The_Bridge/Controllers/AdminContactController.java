package The_Bridge.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import The_Bridge.Entities.Contact;
import The_Bridge.Services.ContactService;

import java.util.List;

@RestController
@RequestMapping("/api/admin/contact")
@CrossOrigin
public class AdminContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    public List<Contact> getAllSubmissions() {
        return contactService.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public Contact getSubmissionById(@PathVariable Long id) {
        return contactService.getSubmissionById(id);
    }
}
