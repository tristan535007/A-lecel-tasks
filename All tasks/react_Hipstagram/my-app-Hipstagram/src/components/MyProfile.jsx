import { React } from "react";
import { CHeader, Sidebar } from "../layout";

const MyProfile = ({ children }) => {
  return (
    <div className="container-fluid">
      <CHeader />
      <div className="container-fluid mt-2 p-3 mb-2 bg-light text-dark">
        <div className="row">
          <div className="col-3 ">
            <Sidebar />
          </div>
          <div className="col-7 ">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
