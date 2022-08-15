import React from "react";
import styled from "styled-components";
import Chalkboard from "../Images/Chalkboard3.png";

function EventsItem() {
  // framer motion animations
  return (
    <Event>
      <h3>School Name</h3>
      <EventInfo>
        <SchoolInfo>
          <p>School Grade</p>
          <p>Time of Day</p>
        </SchoolInfo>
        <Time>
          <p>duration and frequency</p>
        </Time>
      </EventInfo>
    </Event>
  );
}

export default EventsItem;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  color: white;
  align-items: center;
  transition: 0.3s;
  border-radius: 15px;
  background-size: 500px 300px;
  background-image: url(${Chalkboard});
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const EventInfo = styled.div`
  display: flex;
`;

const SchoolInfo = styled.div`
  transform: translate(-50%, 125%);
`;

const Time = styled.div`
  transform: translate(30%, 165%);
`;
