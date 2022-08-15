import styled from "styled-components";

const RewardsCard = ({ rewards }) => {
  return (
    <RewardCard>
      <p>Reward name {rewards.name}</p>
      <p>Reward description{rewards.description}</p>
      <p>Reward points{rewards.points}</p>
    </RewardCard>
  );
};

export default RewardsCard;

const RewardCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  align-items: center;
  transition: 0.3s;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
