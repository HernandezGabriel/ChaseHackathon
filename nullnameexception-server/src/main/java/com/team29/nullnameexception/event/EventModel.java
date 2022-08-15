package com.team29.nullnameexception.event;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@Entity(name="events")
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class EventModel {
    //id, name, start end, points, school, zipcode, host, description

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;

    @NotNull
    @NonNull
    private String name;

    @NotNull
    @NonNull
    private LocalDateTime start;

    @NotNull
    @NonNull
    private LocalDateTime end;
    @NotNull
    @NonNull
    private Integer points;
    @NotNull
    @NonNull
    private String school;
    @NotNull
    @NonNull
    private String zipcode;
    @NotNull
    @NonNull
    private String host;
    @NotNull
    @NonNull
    private String desc;










}
