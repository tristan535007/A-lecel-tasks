import { React, useState, useRef } from "react";
import {
  Button,
  Overlay,
  FormControl,
  Col,
  Row,
  Container,
} from "react-bootstrap";

const PopChangeNick = ({ nick, onChangeNick, myId }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  // console.log(nick);
  // let [myNick, setMyNick] = useState(nick);
  const target = useRef(null);
  // useEffect(() => setMyNick(nick), [nick]);
  return (
    <>
      {/* <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button> */}
      <div ref={target} onClick={() => setShow(!show)}>
        {nick === undefined ? "Anon" : nick.nick || nick.login}
      </div>

      <Overlay target={target.current} show={show} placement="bottom-end">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <Container fluid className="alert alert-secondary">
            <Row
              {...props}
              style={{
                backgroundColor: "rgba(224, 224, 220, 0.55)",
                padding: "5px 5px",
                color: "white",
                borderRadius: 3,
                ...props.style,
              }}
            >
              <Col>
                <FormControl
                  value={input}
                  placeholder="enter new nick"
                  onChange={(ev) => setInput(ev.target.value)}
                />
              </Col>
              <Col md="auto">
                <Button
                  className="ml-2"
                  onClick={() => {
                    onChangeNick(myId, input);
                    setInput("");
                    setShow(!show);
                  }}
                >
                  New Nick
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </Overlay>
    </>
  );
};
export default PopChangeNick;
