package com.team29.nullnameexception.redemption;

import com.team29.nullnameexception.user.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import java.util.List;



@RestController
@RequestMapping("/redemption")
public class RedemptionController {

    private RedemptionService redemptionService;

    public RedemptionController(RedemptionService redemptionService) {this.redemptionService = redemptionService;}


    @PostMapping("/redeemed")
    public ResponseEntity<RedemptionModel> createRedemption(@Valid @RequestBody RedemptionModel redemption) {
        try {
            return new ResponseEntity<>(redemptionService.createRedemption(redemption), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(redemption, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping("/redemption-log")
    public ResponseEntity<List<RedemptionModel>> getAllRedemptionsByUserId(@RequestBody int userId) {
        try {
            List<RedemptionModel> redemptions = redemptionService.getAllRedemptionsByUserId(userId);

            if (redemptions == null) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }

            return new ResponseEntity<>(redemptions, HttpStatus.OK);
        }

        catch (Exception e) {return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);}
    }
//    @PostMapping("/redeemed")
//    public ResponseEntity<UserModel> createUser(@Valid @RequestBody UserModel user) {
//        try {
//            return new ResponseEntity<>(redemptionService., HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(user, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }


    //Do I need to disinclude my id here?
//    @PostMapping("/redeemed")
//    public ResponseEntity<RedemptionModel> createRedemption(@Valid @RequestBody RedemptionModel redemption)


}
