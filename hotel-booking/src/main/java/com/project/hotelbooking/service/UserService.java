package com.project.hotelbooking.service;

import com.project.hotelbooking.entity.User;
import com.project.hotelbooking.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // ✅ REGISTER USER
    public User saveUser(User user) {
        return repo.save(user);
    }

    // ✅ GET ALL USERS
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // ✅ GET USER BY ID
    public Optional<User> getUserById(Long id) {
        return repo.findById(id);
    }

    // ✅ UPDATE USER
    public User updateUser(Long id, User user) {
        User existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existing.setName(user.getName());
        existing.setEmail(user.getEmail());
        existing.setPassword(user.getPassword());
        existing.setPhone(user.getPhone());

        return repo.save(existing);
    }

    // ✅ DELETE USER
    public void deleteUser(Long id) {
        repo.deleteById(id);
    }

    // ✅ FIND USER BY EMAIL (FOR LOGIN)
    public User findByEmail(String email) {
        return repo.findByEmail(email).orElse(null);
    }

    // ✅ FIND USER BY PHONE (OPTIONAL)
    public User findByPhone(String phone) {
        return repo.findByPhone(phone).orElse(null);
    }

    // ✅ PASSWORD VALIDATION
    public boolean validatePassword(String rawPassword, String storedPassword) {
        return rawPassword.equals(storedPassword);
    }
}
D:\Work\Hotel-Booking\hotel-booking\src\main\java\com\project\hotelbooking\exception