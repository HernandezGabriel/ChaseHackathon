package com.team29.nullnameexception.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<UserModel, Long> {


    @Query(value = "SELECT * from User WHERE " +
            "email = ?1 AND password = ?2; ", nativeQuery = true)
    UserModel getUserByEmailAndPassword(String email, String password);


    @Query(value = "SELECT * from User WHERE user_Id = ?1", nativeQuery = true)
    UserModel findById(long userId);

    @Modifying
    @Query(value = "UPDATE user SET points = ?2 WHERE user_id = ?1 ;", nativeQuery = true )
    void updateUserPoints(long userId, int newPoints);
}
