import React from "react";
import styled from "styled-components";
import EventsItem from "./EventsItem";

function EventsCard() {
  return (
    <EventContainer>
      <EventsItem />
    </EventContainer>
  );
}

export default EventsCard;

const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
