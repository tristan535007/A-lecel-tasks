import { React, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { UploudForm } from "..";
import { ProfilePhoto } from "../../components/ProfilePhoto";
import { words } from "../../convertTimeFunc/words";
import { actionGetPersonalData } from "../../reducers";
import { actionSetAvatar } from "../../reducers/actionGetUpdatePerson";

const StatusBar = ({
  myId,
  getMyInfo,
  followingData = undefined,
  myPosts,
  avatar,
  setAvatar,
}) => {
  // console.log(avatar && avatar.url, "ava");

  useEffect(() => getMyInfo(myId), []);
  return (
    <Container fluid>
      <ProfilePhoto
        avatar={avatar && avatar.url}
        setAvatar={setAvatar}
        myId={myId}
      />
      {/* <UploudForm /> */}

      <Row className="justify-content-md-center mt-3">
        <Col>
          <strong>
            {(Array.isArray(myPosts) &&
              words(myPosts.length, ["Post", "Posts"])) ||
              "Posts 0"}
          </strong>
        </Col>
        <Col>
          <strong>
            {(followingData &&
              words(followingData.length, ["Following", "Followings"])) ||
              "Followings 0"}
          </strong>
        </Col>
        {/* <Col>
          <strong>Followers</strong>
        </Col> */}
      </Row>
    </Container>
  );
};
const CStatusBar = connect(
  (s) => ({
    myId: s.auth.payload?.sub.id,
    followingData: s.users.myInfo?.following,
    avatar: s.users.myInfo?.avatar,
    myPosts: s.users?.myPosts,
  }),
  { getMyInfo: actionGetPersonalData, setAvatar: actionSetAvatar }
)(StatusBar);
export default CStatusBar;
