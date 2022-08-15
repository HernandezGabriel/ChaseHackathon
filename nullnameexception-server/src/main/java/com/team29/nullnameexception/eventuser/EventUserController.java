package com.team29.nullnameexception.eventuser;


import com.team29.nullnameexception.event.EventModel;
import com.team29.nullnameexception.event.EventRepository;
import com.team29.nullnameexception.user.UserModel;
import com.team29.nullnameexception.user.UserRepository;
import org.apache.catalina.filters.ExpiresFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class EventUserController {
    @Autowired
    EventUserRepository eventUserRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    EventRepository eventRepo;


    //returns points added
    //accepts a userid and eventid
    //creates eventUser
    @PostMapping("/event-signup")
    public ResponseEntity<Integer> signUpForEvent(@RequestBody long userId, @RequestBody long eventId){
            try{

                UserModel user = userRepo.findById(userId);
                Optional<EventModel> event = eventRepo.findById(eventId);
                 if(user==null|| event.isEmpty()){
                     return new ResponseEntity<>(0, HttpStatus.BAD_REQUEST);
                 }


                 int points = user.getPoints() + event.get().getPoints();

                 userRepo.updateUserPoints(userId,points);



                return new ResponseEntity<>(points, HttpStatus.BAD_REQUEST);

            }catch (Exception e){
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
    }
}
