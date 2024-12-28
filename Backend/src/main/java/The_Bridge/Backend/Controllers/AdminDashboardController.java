package The_Bridge.Backend.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import The_Bridge.Backend.Services.ContactService;
import The_Bridge.Backend.Services.CourseService;

@RestController
@RequestMapping("/api/admin/dashboard")
@CrossOrigin
@PreAuthorize("hasRole('ADMIN')")
public class AdminDashboardController {
    @Autowired
    private CourseService courseService;

    @Autowired
    private ContactService contactService;

    @GetMapping("/stats")
    public Map<String, Object> getDashboardStats() {
        long courseCount = courseService.getAllCourses().size();
        long contactSubmissionsCount = contactService.getAllSubmissions().size();

        Map<String, Object> stats = new HashMap<>();
        stats.put("courseCount", courseCount);
        stats.put("contactSubmissionsCount", contactSubmissionsCount);
        return stats;
    }
}
