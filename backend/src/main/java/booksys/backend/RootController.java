package booksys.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/")
public class RootController {
    @GetMapping(path = "/")
    public String getRoot(){
        return "Hello";
    }
}