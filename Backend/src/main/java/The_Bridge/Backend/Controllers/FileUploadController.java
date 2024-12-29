package The_Bridge.Backend.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import The_Bridge.Backend.Services.FileStorageService;

@RestController
@RequestMapping("/api/admin/upload")
@CrossOrigin
public class FileUploadController {
    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        String fileName = fileStorageService.storeFile(file);
        Map<String, String> response = new HashMap<>();
        response.put("fileName", fileName);
        response.put("url", "http://localhost:8080/uploads/" + fileName);
        return ResponseEntity.ok(response);
    }
}
