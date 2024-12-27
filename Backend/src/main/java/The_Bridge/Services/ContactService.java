package The_Bridge.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import The_Bridge.Entities.Contact;
import The_Bridge.Repositories.ContactRepository;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // Fetch all contact submissions
    public List<Contact> getAllSubmissions() {
        return contactRepository.findAll();
    }

    // Fetch a single contact submission by ID
    public Contact getSubmissionById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    // Save a new contact submission
    public Contact saveSubmission(Contact submission) {
        return contactRepository.save(submission);
    }

    // Delete a contact submission by ID
    public void deleteSubmission(Long id) {
        contactRepository.deleteById(id);
    }
}
