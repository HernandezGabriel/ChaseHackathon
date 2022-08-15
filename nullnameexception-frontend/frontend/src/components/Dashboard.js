import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EventsCard from "./EventsCard";
import Header from "./Header";

const Dashboard = () => {
  // fetched from the API
  const [user, setUser] = useState("");
  const [events, setEvents] = useState("");
  const [points, setPoints] = useState("");

  return (
    <div>
      <Header />
      <span>
        <h2>Hi, {user}!</h2>
        <UserAvatar
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="user-avatar"
        />
        <DashboardContent>
          <div>
            <Link to="/events">
              <OpportunitiesButton>
                <StyledFontAwesomeIcon icon={faMagnifyingGlass} />
                <h2>Find Volunteer Opportunites</h2>
                <p>Make a difference in the lives of students.</p>
              </OpportunitiesButton>
            </Link>
          </div>

          <div>
            <Link to="/rewards">
              <RedeemButton>
                <StyledFontAwesomeIcon icon={faAward} />
                <h2>Redeem your points</h2>
                {points} points
              </RedeemButton>
            </Link>
          </div>
        </DashboardContent>
        <Events>
          You have {} events coming up.
          <EventsCard />
        </Events>
      </span>
    </div>
  );
};

export default Dashboard;

const UserAvatar = styled.img`
  border-radius: 100%;
  height: 150px;
  width: 150px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
`;

const OpportunitiesButton = styled.button`
  text-decoration: none;
  color: black;
  cursor: pointer;
  border-radius: 10px;
`;

const DashboardContent = styled.div`
  display: flex;
  /* grid-template-columns: auto auto auto; */
  justify-content: space-around;
`;

const RedeemButton = styled.button`
  text-decoration: none;
  color: black;
  cursor: pointer;
  border-radius: 10px;
`;
const Events = styled.div`
  margin-top: 30px;
`;
