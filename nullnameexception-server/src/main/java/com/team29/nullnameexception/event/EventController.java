package com.team29.nullnameexception.event;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/events")
    public ResponseEntity<List<EventModel>> listEventsByZipcode(String zipcode){
        List<EventModel> events;

        try{
            events = eventRepository.getEventsByZipCode(zipcode);
            return new ResponseEntity<>(events, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }



}
