//package com.project.hotelbooking.entity;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Table(name = "dine_bookings")
//@Getter
//@Setter
//public class DineBooking {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    // ✅ CUSTOMER DETAILS
//    @Column(nullable = false)
//    private String name;
//
//    @Column(nullable = false)
//    private String email;
//
//    @Column(nullable = false)
//    private String mobile;
//
//    // ✅ BOOKING DETAILS
//    @Column(name = "booking_date", nullable = false)
//    private String bookingDate;
//
//    @Column(name = "number_of_people", nullable = false)
//    private int numberOfPeople;
//
//    // ✅ PAYMENT DETAILS
//    @Column(nullable = false)
//    private double amount;
//
//    @Column(name = "payment_status", nullable = false)
//    private String paymentStatus;
//}

package com.project.hotelbooking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "dine_bookings")
@Getter
@Setter
public class DineBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ CUSTOMER DETAILS
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String mobile;

    // ✅ BOOKING DETAILS
    @Column(name = "booking_date", nullable = false)
    private String bookingDate;

    @Column(name = "number_of_people", nullable = false)
    private int numberOfPeople;

    // ✅ PAYMENT DETAILS
    @Column(nullable = false)
    private double amount;

    @Column(name = "payment_status", nullable = false)
    private String paymentStatus;

    // ✅ REQUIRED FOREIGN KEYS
    @Column(name = "restaurant_id", nullable = false)
    private Long restaurantId;

    @Column(name = "user_id", nullable = false)
    private Long userId;
}
