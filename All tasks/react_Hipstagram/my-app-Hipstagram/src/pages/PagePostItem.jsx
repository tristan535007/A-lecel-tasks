import { React, useState } from "react";
import { FriendAvatar, PostComment } from "../layout";
import {
  Card,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav,
  NavLink,
} from "react-bootstrap";
import { timeConverter } from "../convertTimeFunc/convertStamp";
import { Slider } from "../components/Slider";
import history from "../history";
import pathComp from "../PathForRoute/pathObject";
import { words } from "../convertTimeFunc/words";

export const PagePostItem = ({
  post: {
    _id,
    text,
    title,
    owner: { nick, login, avatar },
    images,
    comments,
    likes,
  },
  addComment,
  setLike,
}) => {
  // console.log(images, "img");
  //стейт для input field for add comments
  let [valueComment, setValueComment] = useState("");
  // toggle for spoiler comments below
  let [toggle, setToggle] = useState(false);
  return (
    <li className="mb-5">
      <Card style={{ maxWidth: "50rem" }}>
        <Card.Header className="bg-white border-0 ">
          <Row className="d-flex align-items-center">
            <Col xs="6" md="3" lg="3">
              <FriendAvatar w={80} h={80} src={avatar} />
            </Col>
            <Col>
              <Card.Text>
                <strong>{nick || login || "Anon"}</strong>
              </Card.Text>
            </Col>
            <Row>
              <Col className="mt-2 mb-2">
                <Button
                  variant="secondary"
                  onClick={() => history.push(pathComp.feed)}
                >
                  Go back!
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Header>
        <Card.Body>
          <div className="alert alert-light" role="alert">
            <Row xs={1} md={2} lg={3}>
              <Col>
                <Card.Title>Title of post:</Card.Title>
              </Col>
              <Col>
                <Card.Text>{title || "Untitled"}</Card.Text>
              </Col>
            </Row>
            <hr className="mt-0" />
            {/* проверка есть ли в посте картинка если нет сообщение для юзера наче слайдер*/}
            {!images || !images.length ? (
              <div>No any img</div>
            ) : (
              <Slider images={images} />
            )}
            <Card className="mt-1">
              <Card.Header>Post description</Card.Header>
              <Card.Body>
                <p>{text}</p>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <Card.Body className="border-0">
          <Row className="d-flex align-items-center border-bottom border-top">
            <Col>
              <div className="alert alert-light">
                <NavLink onClick={() => setLike && setLike(_id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="22"
                    height="22"
                    className="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="alert alert-light">{`${
                Array.isArray(likes)
                  ? words(likes.length, ["Like", "Likes"])
                  : "Likes 0"
              }`}</div>
            </Col>
            <Col>
              <div className="alert alert-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="22"
                  height="22"
                  className="dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </Col>
            <Col>
              <Nav.Link onClick={() => setToggle(!toggle)}>Comments</Nav.Link>
            </Col>
          </Row>
          <div className="alert alert-light " role="alert">
            <Card className="mt-1">
              <Card.Header>Comments field</Card.Header>
              {/* Спойлер для коментов  */}
              {toggle && (
                <Card.Body>
                  {comments === null ? (
                    <Container>No any Comments</Container>
                  ) : (
                    comments.map((comment) => (
                      <Container
                        key={comment.createdAt}
                        className="border rounded border-secondary mb-2"
                      >
                        <Row className="d-flex align-items-center pt-2">
                          <Col xs="6" md="3" lg="3">
                            <FriendAvatar
                              src={comment.owner?.avatar?.url}
                              w={70}
                              h={70}
                            />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row-reverse bd-highlight">
                              <strong>
                                {comment.owner.nick ||
                                  comment.owner.login ||
                                  "Anon"}
                              </strong>
                              &nbsp;
                              <p>User name: </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="d-flex flex-row-reverse bd-highlight">
                              <strong>
                                {/* Коныертируем timeStamp в читаемое значение даты */}
                                {timeConverter(comment.createdAt)}
                              </strong>
                              &nbsp;
                              <p>Was here at: </p>
                            </div>
                          </Col>
                        </Row>

                        <PostComment comment={comment} />
                      </Container>
                    ))
                  )}
                </Card.Body>
              )}
            </Card>
          </div>
          <Container fluid className="alert alert-secondary rounded-pill ">
            <Row xs={2} md={5} lg={2}>
              <Col>
                <FormControl
                  value={valueComment}
                  onChange={(e) => setValueComment(e.target.value)}
                  style={{ boxShadow: "none" }}
                  type="text"
                  placeholder="Add your Comment..."
                  className="mr-sm-2 border-0"
                />
              </Col>
              <Col md="auto">
                <Form inline>
                  {/* при нажатии на кнопку отправляем запрос на добавление комментария в посте */}
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      addComment(valueComment, _id);
                      setValueComment("");
                    }}
                  >
                    Send
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </li>
  );
};
