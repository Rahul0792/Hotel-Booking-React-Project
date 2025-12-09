package com.project.hotelbooking.controller;

import com.project.hotelbooking.entity.DineBooking;
import com.project.hotelbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dine_bookings")
@CrossOrigin(origins = "*")
public class DineBookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<DineBooking> createBooking(@RequestBody DineBooking dineBooking) {
        dineBooking.setPaymentStatus("PENDING");
        DineBooking savedBooking = bookingService.createDineBooking(dineBooking);
        return ResponseEntity.ok(savedBooking);
    }

    // ✅ UPDATE FULL BOOKING
    @PutMapping("/{id}")
    public ResponseEntity<DineBooking> updateBooking(
            @PathVariable Long id,
            @RequestBody DineBooking updatedBooking) {

        DineBooking updated = bookingService.updateDineBooking(id, updatedBooking);
        if (updated != null)
            return ResponseEntity.ok(updated);
        else
            return ResponseEntity.notFound().build();
    }

    // ✅ UPDATE PAYMENT STATUS AFTER PAYMENT SUCCESS
    @PatchMapping("/{id}/payment-success")
    public ResponseEntity<DineBooking> markPaymentSuccess(@PathVariable Long id) {

        Optional<DineBooking> optionalBooking = bookingService.getDineBookingById(id);
        if (optionalBooking.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        DineBooking booking = optionalBooking.get();
        booking.setPaymentStatus("SUCCESS");

        DineBooking updated = bookingService.createDineBooking(booking);
        return ResponseEntity.ok(updated);
    }

    // ✅ GET ALL DINE BOOKINGS
    @GetMapping
    public ResponseEntity<List<DineBooking>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllDineBookings());
    }

    // ✅ GET DINE BOOKING BY ID
    @GetMapping("/{id}")
    public ResponseEntity<DineBooking> getBookingById(@PathVariable Long id) {
        Optional<DineBooking> booking = bookingService.getDineBookingById(id);
        return booking.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ DELETE DINE BOOKING
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        boolean deleted = bookingService.deleteDineBooking(id);
        if (deleted)
            return ResponseEntity.ok("Dine booking deleted successfully");
        else
            return ResponseEntity.notFound().build();
    }
}
