import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RewardsCard from "./RewardsCard";
import styled from "styled-components";

const RewardsPage = () => {
  const [rewards, setRewards] = useState([]);

  return (
    <div>
      <div>
        <h2>
          Redeem Points <FontAwesomeIcon icon={faStar} />
        </h2>
        {/* user points */}
        {/* {userPoints} */}
      </div>
      <RewardContainer>
        <RewardsCard rewards={rewards} />
      </RewardContainer>
    </div>
  );
};

export default RewardsPage;

const RewardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
