import React from "react";
import "./UniSec1.css";

function UniSec1(props) {
  return (
    <>
      <div className="uni-container">
        <img id="uniImg" src="/assets/images/uniTrans.png" alt="uni" />
        <div className="uni-card">
          <p style={{ fontWeight: "500" }}>Welcome To</p>

          <p
            style={{ textAlign: "center", fontWeight: "600", fontSize: "30px" }}
          >
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default UniSec1;
