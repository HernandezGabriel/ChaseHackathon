package com.team29.nullnameexception.user;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity(name="user")
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotNull
    @NonNull
    private String password;

    @NotNull
    @NonNull
    private String birthdate;

    @NotNull
    @NonNull
    private Integer points;
    @NotNull
    @NonNull
    private String email;
    @NotNull
    @NonNull
    private String zipcode;
    @NotNull
    @NonNull
    private String picture;
    @NotNull
    @NonNull
    private String firstName;
    @NotNull
    @NonNull
    private String lastName;




}
