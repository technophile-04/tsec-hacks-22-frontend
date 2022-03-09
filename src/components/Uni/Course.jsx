import React from "react";
import "./Course.css";

function Course(props) {
  return (
    <div className="course-card">
      <p style={{ fontSize: "24px", fontWeight: "500", alignSelf: "center" }}>
        {props.name}
      </p>
      <div className="course-credit">
        <p>Credits:{props.credit}</p>
        <p>Year:{props.year}</p>
      </div>
      <p style={{ alignSelf: "center" }}>Department:{props.dep}</p>
    </div>
  );
}

export default Course;
