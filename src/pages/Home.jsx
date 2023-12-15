import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Leaderboard from "../components/Leaderboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Home = () => {
  return (
    <Container>
      <Navbar page={"Leaderboard"} />
      <Leaderboard heading={"OVERALL"}/>
      <Leaderboard heading={"MENS TRACK"}/>
      <Leaderboard heading={"MENS FIELD"}/>
      <Leaderboard heading={"WOMENS TRACK"}/>
      <Leaderboard heading={"WOMENS FIELD"}/>
    </Container>
  );
};

export default Home;
