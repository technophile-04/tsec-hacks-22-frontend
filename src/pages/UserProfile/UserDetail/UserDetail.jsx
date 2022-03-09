import React from "react";
import "./UserDetail.css";
import { Image, Box } from "@chakra-ui/react";

const StudentData = { name: "Aadil Saudagar", Credits: "10" };
function UserDetail() {
  return (
    <div className="stud-container">
      <div className="detail-container">
        <img
          style={{ width: "120px", height: "120px" }}
          src="/assets/face_img.png"
        />
        <div className="info">
          <p style={{ fontWeight: "500", fontSize: "20px" }}>Hello</p>
          <p style={{ fontSize: "30px", fontWeight: "600" }}>
            {StudentData.name} !
          </p>
          <div className="credits">
            <p style={{ fontWeight: "600", fontSize: "30px" }}>
              {StudentData.Credits}
            </p>
            <p style={{ marginLeft: "25px" }}>Total Academic Credits</p>
          </div>
        </div>
      </div>
      <div className="card">
        <p style={{ fontWeight: "500" }}>ACADEMIC BANK OF CREDITS</p>
        <p>ID</p>
        <p style={{ fontWeight: "600", fontSize: "25px" }}>
          {StudentData.name}
        </p>
        <p style={{ textAlign: "center" }}>
          We use basic information from your DigiLocker account to identify you
          and allow access to ABC platform
        </p>
      </div>
    </div>
  );
}

export default UserDetail;
