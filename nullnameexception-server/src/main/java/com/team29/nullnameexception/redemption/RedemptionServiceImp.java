package com.team29.nullnameexception.redemption;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RedemptionServiceImp implements RedemptionService {

    //Method for computing change in reward,
    //Passing in user id and reward id from controller

    RedemptionRepository redemptionRepo;

    @Override
     public RedemptionModel createRedemption(RedemptionModel redemption) {
        return redemptionRepo.save(redemption);
    }

    @Override
    public List<RedemptionModel> getAllRedemptionsByUserId(int userId) {
        return redemptionRepo.getAllRedemptionsByUserId(userId);
    }

    //@Override
//    int updateUserPointValue(int newPointValue) {
//        return 0;
//    }

}
