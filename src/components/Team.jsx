import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.h4`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.h4`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Team = ({ team, heading }) => {
  const data = {
    A: "MR",
    B: "VR",
    C: "PH",
    D: "HB",
    E: "WZ",
    F: "NZ",
    G: "EZ",
    H: "SZ",
    I: "NCZ",
    J: "NWZ",
    K: "SCZ",
    L: "MFX",
  };
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (heading === "OVERALL") {
      setScore(team.mtrack + team.mfield + team.ftrack + team.ffield);
    } else if (heading === "MENS FIELD") {
      setScore(team.mfield);
    } else if (heading === "MENS TRACK") {
      setScore(team.mtrack);
    } else if (heading === "WOMENS TRACK") {
      setScore(team.ftrack);
    } else if (heading === "WOMENS FIELD") {
      setScore(team.ffield);
    }
  }, []);
  return (
    <Container>
      <Left>{data[team.name]}</Left>
      <Right>{score}</Right>
    </Container>
  );
};

export default Team;
