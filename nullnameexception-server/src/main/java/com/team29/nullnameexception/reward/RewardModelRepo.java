package com.team29.nullnameexception.reward;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RewardModelRepo extends JpaRepository<RewardModel,Long> {
    List<RewardModel> findAll();
}
