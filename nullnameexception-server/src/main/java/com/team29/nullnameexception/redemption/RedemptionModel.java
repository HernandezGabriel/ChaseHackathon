package com.team29.nullnameexception.redemption;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity(name="redemption")
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class RedemptionModel {


    //Is this necessary?
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long redemptionId;

    @NonNull
    private Long userId;
    @NonNull
    private Long rewardId;
    @NonNull
    private String schoolName;





}