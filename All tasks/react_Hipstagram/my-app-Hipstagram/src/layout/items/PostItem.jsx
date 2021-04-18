import React from "react";

export const PostItem = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);
