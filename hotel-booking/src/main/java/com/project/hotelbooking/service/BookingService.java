package com.project.hotelbooking.service;

import com.project.hotelbooking.entity.DineBooking;
import com.project.hotelbooking.entity.HotelBooking;
import com.project.hotelbooking.repository.DineBookingRepository;
import com.project.hotelbooking.repository.HotelBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private HotelBookingRepository hotelBookingRepository;

    @Autowired
    private DineBookingRepository dineBookingRepository;

    // ================== ✅ HOTEL BOOKINGS ==================

    public List<HotelBooking> getAllHotelBookings() {
        return hotelBookingRepository.findAll();
    }

    public Optional<HotelBooking> getHotelBookingById(Long id) {
        return hotelBookingRepository.findById(id);
    }

    public HotelBooking createHotelBooking(HotelBooking booking) {
        return hotelBookingRepository.save(booking);
    }

    public boolean deleteHotelBooking(Long id) {
        if (hotelBookingRepository.existsById(id)) {
            hotelBookingRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // ================== ✅ DINE BOOKINGS ==================

    public List<DineBooking> getAllDineBookings() {
        return dineBookingRepository.findAll();
    }

    public Optional<DineBooking> getDineBookingById(Long id) {
        return dineBookingRepository.findById(id);
    }

    public DineBooking createDineBooking(DineBooking booking) {
        return dineBookingRepository.save(booking);
    }

    // ✅ SAFE FULL UPDATE
    public DineBooking updateDineBooking(Long id, DineBooking updatedBooking) {
        return dineBookingRepository.findById(id).map(existing -> {

            if (updatedBooking.getName() != null)
                existing.setName(updatedBooking.getName());

            if (updatedBooking.getEmail() != null)
                existing.setEmail(updatedBooking.getEmail());

            if (updatedBooking.getMobile() != null)
                existing.setMobile(updatedBooking.getMobile());

            if (updatedBooking.getBookingDate() != null)
                existing.setBookingDate(updatedBooking.getBookingDate());

            // ✅ Always update numbers safely
            existing.setNumberOfPeople(updatedBooking.getNumberOfPeople());
            existing.setAmount(updatedBooking.getAmount());

            if (updatedBooking.getPaymentStatus() != null)
                existing.setPaymentStatus(updatedBooking.getPaymentStatus());

            return dineBookingRepository.save(existing);

        }).orElse(null);
    }

    public boolean deleteDineBooking(Long id) {
        if (dineBookingRepository.existsById(id)) {
            dineBookingRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
