import React from "react";
import noAva from "../images/noAvatar_v2.jpg";
import { Card, Image } from "react-bootstrap";
import { Basic, UploudForm } from "../layout";
export const ProfilePhoto = ({ avatar, setAvatar, myId }) => {
  return (
    <Card className="bg-dark-1 text-dark">
      <Card.Img
        src={
          avatar ? "http://hipstagram.asmer.fs.a-level.com.ua/" + avatar : noAva
        }
        alt="avatar"
      />
      {/* Drope Zone - Basic */}
      <Card.Footer>
        <UploudForm setAvatar={setAvatar} myId={myId} />
      </Card.Footer>
    </Card>

    // <Card>
    //   <Image
    //     src={
    //       avatar ? "http://hipstagram.asmer.fs.a-level.com.ua/" + avatar : noAva
    //     }
    //   />
    // </Card>
  );
};
