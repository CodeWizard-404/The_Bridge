package The_Bridge.Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import The_Bridge.Backend.Services.UserService;

@Component 
public class AppStartupRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;  

    @Override
    public void run(String... args) throws Exception {
        userService.createAdminIfNotExist();
    }
}
