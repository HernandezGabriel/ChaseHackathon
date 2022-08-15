package com.team29.nullnameexception.eventuser;

import com.team29.nullnameexception.event.EventModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventUserRepository extends JpaRepository<EventUserModel, Long> {


}
