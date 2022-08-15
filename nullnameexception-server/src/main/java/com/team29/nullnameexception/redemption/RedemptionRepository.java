package com.team29.nullnameexception.redemption;

import com.team29.nullnameexception.user.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RedemptionRepository extends JpaRepository <RedemptionModel, Long> {

    @Query(value = "SELECT * from Redemption WHERE " +
            "user_id = ?1; ", nativeQuery = true)
    List<RedemptionModel> getAllRedemptionsByUserId(int userId);

}
