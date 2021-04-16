package booksys.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/")
@CrossOrigin(origins = "http://localhost:3000")
public class RootController {
    @GetMapping(path = "/")
    public String getRoot(){
        return "Hello";
    }
}