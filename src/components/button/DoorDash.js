import React from "react";
import DoorDashIcon from "../../assets/doordash-icon.png";
import styled from "styled-components";

const DoorDashLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 200px;
  height: 200px;
  text-align:center;
`;

const DoorDashLabel = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;
`;

const DoorDash = () => {
  const ddUrl = `https://www.doordash.com/store/glowing-flowers,-plants,-and-gifts-san-francisco-23502751`;
  return (
    <DoorDashLink>
      <DoorDashLabel>Available on Doordash</DoorDashLabel>
      <a href={ddUrl} target="_blank" rel="noreferrer">
        <img src={DoorDashIcon} alt="doordash" aria-labelledby="icon" />
      </a>
    </DoorDashLink>
  );
};

export default DoorDash;
