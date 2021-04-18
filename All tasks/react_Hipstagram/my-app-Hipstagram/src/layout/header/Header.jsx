import { React, useEffect, useState } from "react";
import avatar from "../../images/avatar.jpg";
import logo from "../../images/logo.png";
import noAva from "../../images/noAvatar_v2.jpg";
import { connect } from "react-redux";
import {
  actionAuthLogout,
  actionSetUpdMe,
  actionFindFriends,
} from "../../reducers";
import pathComp from "../../PathForRoute/pathObject";
import history from "../../history";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import PopChangeNick from "../../components/PopOverChNick";

const Header = ({
  onLogout,
  isLoggedIn,
  loginName,
  onChangeNick,
  myId,
  findFriends,
  miniAva,
}) => {
  // console.log(miniAva);
  useEffect(() => {
    if (!isLoggedIn) {
      history.push(pathComp.login);
    }
  }, [isLoggedIn]);
  let [input, setInput] = useState("");
  return (
    <Navbar bg="light" expand="lg">
      <Image src={logo} height="40" width="40" className="mr-3" />
      <Navbar.Brand to="/feed">Hipstagram</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mt-1 ">
          <Form inline>
            <FormControl
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder={
                window.location.pathname === pathComp.feed
                  ? "Find post"
                  : "Search for Friends"
              } //отслеживаем текущее положение url для placeholder
              className="mr-sm-2 "
            />
            <Button
              variant="outline-success"
              onClick={() => {
                setInput("");
                history.push(pathComp.search);
                window.location.pathname === pathComp.search &&
                  findFriends(input.trim()); //передаем значение инпута по поиску друзей
              }}
            >
              Search
            </Button>
          </Form>
        </Nav>
        <Button variant="light" onClick={onLogout}>
          Logout
        </Button>
        <Nav.Link>
          <PopChangeNick
            nick={loginName}
            onChangeNick={onChangeNick}
            myId={myId}
          />
        </Nav.Link>
        <Row>
          <Col>
            <Image
              src={
                miniAva
                  ? "http://hipstagram.asmer.fs.a-level.com.ua/" + miniAva
                  : noAva
              }
              width="40"
              height="40"
              roundedCircle
            />
          </Col>
        </Row>
      </Navbar.Collapse>
    </Navbar>
  );
};

const CHeader = connect(
  (s) => ({
    isLoggedIn: s.auth.payload,
    loginName: s.users?.myInfo,
    miniAva: s.users?.myInfo?.avatar?.url,
    myId: s.auth.payload?.sub?.id,
  }),
  {
    onLogout: actionAuthLogout,
    onChangeNick: actionSetUpdMe,
    findFriends: actionFindFriends,
  }
)(Header);
export { CHeader };
