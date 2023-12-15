import { createContext, useContext, useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Cart = createContext();

const Context = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    try {
      const fetchedTeams = await publicRequest.get(`/team`);
      setTeams(fetchedTeams.data);
      // console.log(fetchedTeams.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTeam = async (val, id) => {
    try {
      const updatedTeam = await publicRequest.put(`/team/${id}`, {
        mtrack: val,
      });
      fetchTeams();
    } catch (error) {
      console.log(error);
    }
  };
  const updateTeam2 = async (val, id) => {
    try {
      const updatedTeam = await publicRequest.put(`/team/${id}`, {
        mfield: val,
      });
      fetchTeams();
    } catch (error) {
      console.log(error);
    }
  };
  const updateTeam3 = async (val, id) => {
    try {
      const updatedTeam = await publicRequest.put(`/team/${id}`, {
        ftrack: val,
      });
      fetchTeams();
    } catch (error) {
      console.log(error);
    }
  };
  const updateTeam4 = async (val, id) => {
    try {
      const updatedTeam = await publicRequest.put(`/team/${id}`, {
        ffield: val,
      });
      fetchTeams();
    } catch (error) {
      console.log(error);
    }
  };
  const searchEvent = async (name) => {
    try {
      const foundEvent = await publicRequest.get(`/event/find/${name}`);
      return foundEvent.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateEvent = async (name, pos) => {
    try {
      const updatedEvent = await publicRequest.put(`/event/${name}`, {
        first: pos.first,
        second: pos.second,
        third: pos.third,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTeams();
  }, []);
  return (
    <Cart.Provider
      value={{
        teams,
        setTeams,
        fetchTeams,
        updateTeam,
        updateEvent,
        searchEvent,
        updateTeam2,
        updateTeam3,
        updateTeam4,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
