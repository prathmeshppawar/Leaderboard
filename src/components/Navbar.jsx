import React from "react";
import styled from "styled-components";
import { Menu } from "@mui/material";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: #fcf5f5;
`;
const Wrapper = styled.div`
  /* margin: 10px 0px; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  ${mobile({ textAlign: "center" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  ${mobile({ flex: 1, justifyContent: "flex-end" })}
`;
const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  :hover {
    border-radius: 50%;
    background-color: lightgray;
  }
`;
const Hr = styled.hr`
  padding: 0;
  margin: 0;
`;

const Navbar = ({ page }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          {location.pathname !== "/" ? (
            <Button>
              <ArrowBackIcon onClick={() => navigate("/")} />
            </Button>
          ) : (
            <Link className="link" to={"/"}>
              <Logo>{page}</Logo>
            </Link>
          )}
        </Left>
        <Center>
          {location.pathname === "/" ? <></> : <Logo>{page}</Logo>}
        </Center>
        <Right>
          <MenuItem
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Track
          </MenuItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to={"/hundred"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's 100 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/twoh"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's 200 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/fourh"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's 400 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/relay"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's 4X100 M Relay
              </MenuItem>
            </Link>
            <Hr></Hr>
            <Link className="link" to={"/fhundred"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's 100 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/ftwoh"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's 200 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/ffourh"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's 400 M
              </MenuItem>
            </Link>
            <Link className="link" to={"/frelay"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's 4X100 M Relay
              </MenuItem>
            </Link>
          </Menu>
          <MenuItem
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick2}
          >
            Field
          </MenuItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to={"/shotput"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's Shotput
              </MenuItem>
            </Link>
            <Link className="link" to={"/longjump"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's Long Jump
              </MenuItem>
            </Link>
            <Link className="link" to={"/discuss"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Men's Discuss Throw
              </MenuItem>
            </Link>
            <Hr></Hr>
            <Link className="link" to={"/fshotput"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's Shotput
              </MenuItem>
            </Link>
            <Link className="link" to={"/flongjump"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's Long Jump
              </MenuItem>
            </Link>
            <Link className="link" to={"/fdiscuss"}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  // width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // padding: "5px 10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cccccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }}
              >
                Women's Discuss Throw
              </MenuItem>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
