package com.team29.nullnameexception.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventRepository extends JpaRepository<EventModel, Long> {

    @Query(value = "SELECT * from events WHERE " +
            "zipcode = ?1 ; ", nativeQuery = true)
    List<EventModel> getEventsByZipCode(String zipcode);




}
