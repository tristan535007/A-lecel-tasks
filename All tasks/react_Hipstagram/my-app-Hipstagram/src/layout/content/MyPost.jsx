import { React, useEffect, useState } from "react";
import { Card, Button, Row, Col, FormControl, Nav } from "react-bootstrap";
import { MyProfile, UploudPostForm } from "..";
import { Content } from "./Content";
import { connect } from "react-redux";
import { actionPicturePostId, actionSetPost } from "../../reducers";
import history from "../../history";
import pathComp from "../../PathForRoute/pathObject";

const MyPost = ({ addPost, addPicture, currentPictureId }) => {
  let [show, setShow] = useState(false);
  let [titleInput, setTitleInput] = useState("");
  let [textInput, setTextInput] = useState("");

  return (
    <MyProfile>
      <Content>
        <Card className="text-center">
          <Card.Header>New post creater</Card.Header>
          <Card.Body>
            <Card.Title>
              <Row>
                <Col>Title of your new post</Col>
                <Col>
                  <FormControl
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    type="text"
                    placeholder="new title"
                    className="mr-sm-2"
                  />
                </Col>
              </Row>
            </Card.Title>
            <Card.Title>
              <Row>
                <Col>Some description of your new post</Col>
                <Col>
                  <FormControl
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    type="text"
                    placeholder="new text"
                    className="mr-sm-2"
                  />
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <Nav.Link>
                <span onClick={() => setShow(!show)}>
                  Click to add some pictures
                </span>
              </Nav.Link>
            </Card.Text>
            {show && <UploudPostForm addPicture={addPicture} />}
            <Button
              variant="primary"
              onClick={() => {
                setTitleInput("");
                setTextInput("");
                currentPictureId &&
                  addPost(textInput, titleInput, currentPictureId);
                history.push(pathComp.my_profile);
              }}
            >
              Post it!
            </Button>
          </Card.Body>
        </Card>
      </Content>
    </MyProfile>
  );
};

export const CMyPost = connect(
  (s) => ({
    currentPictureId: s.post?.newCurrentPictureId,
  }),
  {
    addPost: actionSetPost,
    addPicture: actionPicturePostId,
  }
)(MyPost);
