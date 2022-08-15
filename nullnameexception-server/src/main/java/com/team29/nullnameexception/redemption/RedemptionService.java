package com.team29.nullnameexception.redemption;

import java.util.List;

public interface RedemptionService {

    RedemptionModel createRedemption(RedemptionModel redemption);

    List<RedemptionModel> getAllRedemptionsByUserId(int userId);

//    int updateUserPointValue(int newPointValue);
}
