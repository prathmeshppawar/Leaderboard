import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { mobile } from "../responsive";
import { CartState } from "../context/Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
  margin: 10px;
  border: 2px solid black;
  border-radius: 10px;
  ${mobile({ justifyContent: "space-around", flexDirection: "column" })}
`;
const Rank = styled.div`
  margin: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0px;
`;
const RankText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: 50%;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
const Option = styled.option`
  width: 100%;
  height: 100%;
`;
const FRelay = () => {
  const { teams, updateTeam3, updateEvent, searchEvent } = CartState();
  const [one, setOne] = useState("NA");
  const [two, setTwo] = useState("NA");
  const [three, setThree] = useState("NA");
  useEffect(() => {
    const fetchEvent = async () => {
      const fetchedEvent = await searchEvent("Frelay");
      setOne(fetchedEvent.first);
      setTwo(fetchedEvent.second);
      setThree(fetchedEvent.third);
    };
    fetchEvent();
  }, []);
  useEffect(() => {
    const newEvent = {
      first: one,
      second: two,
      third: three,
    };
    updateEvent("Frelay", newEvent);
  }, [one, two, three]);
  const setRank = (e, state, setState, points) => {
    if (e.target.value === "NA") {
      const temp = teams.find((team) => {
        return team.name === state;
      });
      let val = temp.ftrack - points;
      updateTeam3(val, temp._id);
      setState(e.target.value);
    } else if (state === "NA") {
      setState(e.target.value);
      const temp = teams.find((team) => {
        return team.name === e.target.value;
      });
      let val = temp.ftrack + points;
      updateTeam3(val, temp._id);
    } else {
      const temp1 = teams.find((team) => {
        return team.name === state;
      });
      let val1 = temp1.ftrack - points;
      updateTeam3(val1, temp1._id);
      const temp2 = teams.find((team) => {
        return team.name === e.target.value;
      });
      let val2 = temp2.ftrack + points;
      updateTeam3(val2, temp2._id);
      setState(e.target.value);
    }
  };
  return (
    <>
      <Container>
        <Navbar page="Women's 4X100 M Relay" />
        <WinnerContainer>
          <Rank>
            <RankText>1st Rank</RankText>
            <Select value={one} onChange={(e) => setRank(e, one, setOne, 10)}>
              <Option value={"NA"}>NA</Option>
              <Option value={"A"}>MR</Option>
              <Option value={"B"}>VR</Option>
              <Option value={"C"}>PH</Option>
              <Option value={"D"}>HB</Option>
              <Option value={"E"}>WZ</Option>
              <Option value={"F"}>NZ</Option>
              <Option value={"G"}>EZ</Option>
              <Option value={"H"}>SZ</Option>
              <Option value={"I"}>NCZ</Option>
              <Option value={"J"}>NWZ</Option>
              <Option value={"K"}>SCZ</Option>
              <Option value={"L"}>MFX</Option>
            </Select>
          </Rank>
          <Rank>
            <RankText>2nd Rank</RankText>
            <Select value={two} onChange={(e) => setRank(e, two, setTwo, 7)}>
              <Option value={"NA"}>NA</Option>
              <Option value={"A"}>MR</Option>
              <Option value={"B"}>VR</Option>
              <Option value={"C"}>PH</Option>
              <Option value={"D"}>HB</Option>
              <Option value={"E"}>WZ</Option>
              <Option value={"F"}>NZ</Option>
              <Option value={"G"}>EZ</Option>
              <Option value={"H"}>SZ</Option>
              <Option value={"I"}>NCZ</Option>
              <Option value={"J"}>NWZ</Option>
              <Option value={"K"}>SCZ</Option>
              <Option value={"L"}>MFX</Option>
            </Select>
          </Rank>
          <Rank>
            <RankText>3rd Rank</RankText>
            <Select
              value={three}
              onChange={(e) => setRank(e, three, setThree, 5)}
            >
              <Option value={"NA"}>NA</Option>
              <Option value={"A"}>MR</Option>
              <Option value={"B"}>VR</Option>
              <Option value={"C"}>PH</Option>
              <Option value={"D"}>HB</Option>
              <Option value={"E"}>WZ</Option>
              <Option value={"F"}>NZ</Option>
              <Option value={"G"}>EZ</Option>
              <Option value={"H"}>SZ</Option>
              <Option value={"I"}>NCZ</Option>
              <Option value={"J"}>NWZ</Option>
              <Option value={"K"}>SCZ</Option>
              <Option value={"L"}>MFX</Option>
            </Select>
          </Rank>
        </WinnerContainer>
      </Container>
    </>
  );
};

export default FRelay;
