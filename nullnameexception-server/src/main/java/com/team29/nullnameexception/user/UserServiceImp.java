package com.team29.nullnameexception.user;


import com.team29.nullnameexception.exceptions.UserNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImp implements UserService{
    private static Logger logger = LoggerFactory.getLogger(UserServiceImp.class);

    @Autowired
    UserRepository userRepo;

    @Override
    public UserModel createUser(UserModel user) {
        return userRepo.save(user);
    }

    @Override
    public UserModel getUserByEmailAndPassword(String email, String password) {
        return userRepo.getUserByEmailAndPassword(email,password);
    }


    @Override
    public UserModel findUserById(Long id) throws UserNotFoundException {
        logger.debug("Looking for User with id {}", id);
        Optional<UserModel> userOptional = userRepo.findById(id);
        if(userOptional.isEmpty())
            throw new UserNotFoundException("No user with id");
        return userOptional.get();

    }

    @Override
    public UserModel updateUser(UserModel user) throws UserNotFoundException {
        Long id = user.getUserId();
        Optional<UserModel> userOptional = userRepo.findById(id);
        if(userOptional.isEmpty())
            throw new UserNotFoundException("No user with id");
        return userRepo.save(user);

    }

    @Override
    public void deleteUser(Long id) throws UserNotFoundException {
        Optional<UserModel> userOptional = userRepo.findById(id);
        if(userOptional.isEmpty())
            throw new UserNotFoundException("User with this id not found");
        UserModel questionToDelete = userOptional.get();
        userRepo.delete(questionToDelete);

    }
}
