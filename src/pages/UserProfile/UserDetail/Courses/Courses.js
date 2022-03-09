import { useState } from "react";
import "./Courses.css";
function Courses() {
  const [courses, setCourses] = useState([]);

  let content = "";
  if (courses.length === 0) {
    content = (
      <div>
        <img src="/assets/blank_folder.png"></img>
        <p>No credits added yet...</p>
      </div>
    );
  }
  return (
    <div className="courses-container">
      <div className="courses">{content}</div>
    </div>
  );
}

export default Courses;
