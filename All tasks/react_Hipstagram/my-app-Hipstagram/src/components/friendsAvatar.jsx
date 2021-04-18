import { React } from "react";
import no_avatar from "../images/no_avatar.png";
import { Card } from "react-bootstrap";

export const FriendAvatar = ({ w = 50, h = 50, avatar }) => (
  <Card.Img
    src={avatar || no_avatar}
    alt="avatar"
    mt={2}
    width={w}
    height={h}
    style={{ maxWidth: "80px" }}
  />
);
