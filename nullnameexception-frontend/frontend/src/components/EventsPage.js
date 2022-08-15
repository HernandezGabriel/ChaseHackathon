import { useState } from "react";
import EventsCard from "./EventsCard";
import Header from "./Header";
import styled from "styled-components";

const EventsPage = () => {
  const [location, setLocation] = useState("");

  return (
    <div>
      <Header />
      <h2>{location} location</h2>
      <EventContainer>
        <EventsCard />
      </EventContainer>
    </div>
  );
};

export default EventsPage;

const EventContainer = styled.div``;
