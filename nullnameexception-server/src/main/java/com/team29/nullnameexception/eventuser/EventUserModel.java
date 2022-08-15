package com.team29.nullnameexception.eventuser;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class EventUserModel {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int logId;

    @NotNull
    int userId;

    @NotNull
    int eventId;


    public EventUserModel() {
    }

    public EventUserModel(int logId, int userId, int eventId) {
        this.logId = logId;
        this.userId = userId;
        this.eventId = eventId;
    }


}
