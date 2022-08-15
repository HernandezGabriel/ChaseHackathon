package com.team29.nullnameexception.user;


import com.team29.nullnameexception.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("")
public class UserController {

    @Autowired
    private UserService userService;


    public UserController(UserService userService){
        this.userService = userService;
    }


    @PostMapping("/sign-up")
    public ResponseEntity<UserModel> createUser(@Valid @RequestBody UserModel user) {
        try {
            return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(user, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping("/log-in")
    public ResponseEntity<UserModel> login(@RequestBody String email, @RequestBody String password){
        UserModel returnedUser;

        try {
            returnedUser=userService.getUserByEmailAndPassword(email,password);

            if(returnedUser==null){
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(returnedUser, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable Integer Id, @RequestBody UserModel user) {
        try {
            UserModel updatedUser = userService.updateUser(user);
            ResponseEntity response = new ResponseEntity<>(updatedUser, HttpStatus.OK);
            return response;
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findUserById(@PathVariable Long id) throws UserNotFoundException {
        UserModel user;
        try {
            user = userService.findUserById(id);
            ResponseEntity<?> response = new ResponseEntity<>(user, HttpStatus.OK);
            return response;
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        }


    }


    @DeleteMapping("/{id}")
    public ResponseEntity<UserModel> deleteUser(Long id) throws UserNotFoundException {
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }







    }
