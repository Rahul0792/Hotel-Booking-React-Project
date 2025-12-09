package com.project.hotelbooking.controller;

import com.project.hotelbooking.dto.LoginRequest;
import com.project.hotelbooking.entity.User;
import com.project.hotelbooking.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    // ✅ SIGNUP / REGISTER USER (with phone)
    @PostMapping
    public User register(@RequestBody User user) {
        return service.saveUser(user);
    }

    // ✅ LOGIN USER (email + password)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        User user = service.findByEmail(request.getEmail());
        if (user == null)
            return ResponseEntity.status(404).body("Email does not exist");

        boolean isValid = service.validatePassword(
                request.getPassword(), user.getPassword());

        if (!isValid)
            return ResponseEntity.status(401).body("Invalid password");

        return ResponseEntity.ok(user);
    }

    // ✅ GET ALL USERS
    @GetMapping
    public List<User> getAll() {
        return service.getAllUsers();
    }

    // ✅ GET USER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return service.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ UPDATE USER
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        return service.updateUser(id, user);
    }

    // ✅ DELETE USER
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteUser(id);
    }
}
