package com.team29.nullnameexception.user;

import com.team29.nullnameexception.exceptions.UserNotFoundException;

public interface UserService {

  UserModel createUser(UserModel user);
  UserModel getUserByEmailAndPassword(String email, String password);
  UserModel findUserById(Long Id) throws UserNotFoundException;
  UserModel updateUser(UserModel user) throws UserNotFoundException;
  void deleteUser(Long id) throws UserNotFoundException;

  //void addPointsToUser;

}
