import React from "react";
import { MyProfile } from "..";
import { Content } from "./Content";

export const ListContent = ({ children }) => {
  return (
    <MyProfile>
      <Content>
        <ul className="list-unstyled">{children}</ul>
      </Content>
    </MyProfile>
  );
};
