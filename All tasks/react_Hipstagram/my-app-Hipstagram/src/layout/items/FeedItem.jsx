import { React } from "react";
import { FriendAvatar } from "..";
import { Card, Row, Col, Button } from "react-bootstrap";
import { timeConverter } from "../../convertTimeFunc/convertStamp";
import history from "../../history";
import pathComp from "../../PathForRoute/pathObject";

export const FeedItem = ({
  post: {
    createdAt,
    _id,
    text,
    title,
    owner: { nick, login, avatar },
    
  },
}) => {
  return (
    <li className="mb-5">
      <Card className="text-center">
        <Card.Header>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Card.Title>Title of post:</Card.Title>
            </Col>
            <Col>
              <Card.Text>{title || "Untitled"}</Card.Text>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <FriendAvatar w={80} h={80} src={avatar} />
          <Card.Title>{nick || login || "Anon"}</Card.Title>

          {window.location.pathname !== pathComp.my_profile && (
            <Button
              variant="primary"
              // по кнопке пушитмя на единичный пост по id
              onClick={() => {
                history.push(pathComp.post + _id);
              }}
            >
              See more details
            </Button>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Card.Title>Description:</Card.Title>
            </Col>
            <Col>
              <Card.Text>{text}</Card.Text>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Card.Title>Was created at:</Card.Title>
            </Col>
            <Col>
              <Card.Text>{timeConverter(createdAt)}</Card.Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </li>
  );
};
