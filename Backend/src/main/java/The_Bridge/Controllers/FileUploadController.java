package The_Bridge.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import The_Bridge.Services.FileStorageService;

import java.nio.file.Files;
import java.nio.file.Path;

@RestController
@RequestMapping("/api/admin/upload")
public class FileUploadController {

}
