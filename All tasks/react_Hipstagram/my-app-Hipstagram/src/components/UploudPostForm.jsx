import { React, useRef } from "react";

export const UploudPostForm = ({ addPicture }) => {
  const formRef = useRef(null);
  const sendFile = async () => {
    let resp = await fetch("/upload", {
      method: "POST",
      headers: localStorage.authToken
        ? { Authorization: "Bearer " + localStorage.authToken }
        : {},
      body: new FormData(formRef.current),
    }).then((r) => r.json());
    resp && addPicture(resp._id);
    console.log(resp, "+");
  };

  return (
    <>
      <form
        action="/upload"
        formMethod="post"
        encType="multipart/form-data"
        ref={formRef}
      >
        <input
          accept="image/*,image/jpg"
          type="file"
          name="photo"
          onChange={sendFile}
        />

        {/* <Button type="submit">Submit form</Button> */}
      </form>
    </>
  );
};
