import React from "react";
import styled from "styled-components";
import { CartState } from "../context/Context";
import Team from "./Team";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  border-radius: 10px;
  border: 2px solid black;
  border-color: black;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: teal;
  margin: 0px;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: #49cbcb;
`;
const LeftH = styled.h3`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
const RightH = styled.h3`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  background-color: #bff8f8;
`;
const Leaderboard = ({ heading }) => {
  const { teams } = CartState();
  return (
    <Container>
      <Title>{heading}</Title>
      <Heading>
        <LeftH>TEAMS</LeftH>
        <RightH>SCORE</RightH>
      </Heading>
      <Body>
        {teams.map((team) => (
            <Team team={team} heading={heading} />
        ))}
      </Body>
    </Container>
  );
};

export default Leaderboard;
