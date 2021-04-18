import { React } from "react";
import { Card } from "react-bootstrap";

export const PostComment = ({ comment: { text } }) => (
  <Card className="mt-1 mb-1 pl-2 pt-2 pb-2">
    <Card.Text>{text === null || text === "" ? ":)" : text}</Card.Text>
  </Card>
);
