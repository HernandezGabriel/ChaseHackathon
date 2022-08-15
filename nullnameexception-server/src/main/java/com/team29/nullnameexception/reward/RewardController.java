package com.team29.nullnameexception.reward;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rewards")
public class RewardController {

    @Autowired
    private RewardModelRepo rewardModelRepo;

    public RewardController(RewardModelRepo rewardModelRepo) {
        this.rewardModelRepo = rewardModelRepo;
    }

    @GetMapping("")
    public ResponseEntity<List<RewardModel>> getRewards(){
        List<RewardModel> rewardModels = rewardModelRepo.findAll();
        ResponseEntity<List<RewardModel>> response = new ResponseEntity<>(rewardModels, HttpStatus.OK);
        return response;

    }
}
