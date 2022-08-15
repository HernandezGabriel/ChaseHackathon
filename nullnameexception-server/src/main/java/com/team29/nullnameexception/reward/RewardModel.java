package com.team29.nullnameexception.reward;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class RewardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @NonNull
    private Integer id;
    @NonNull
    private String rewardType;
    @NonNull
    private Integer rewardCost;
    @NonNull
    private String rewardedSchool;

    public String toString(){
        return String.format("%d %s %d %s",id,rewardType,rewardCost,rewardedSchool);
    }



}
