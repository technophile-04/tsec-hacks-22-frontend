import React from "react";
import "./Course.css";

function Course(props) {
  return (
    <div className="course-card">
      <p style={{ fontSize: "12px", fontWeight: "500" }}>{props.name}</p>
      <div className="course-credit">
        <p>Credits:{props.credit}</p>
        <p>Year:{props.year}</p>
      </div>
    </div>
  );
}

export default Course;
