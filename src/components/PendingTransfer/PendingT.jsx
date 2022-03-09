import React from "react";
import NavBar from "../../pages/UserProfile/Navbar/Navbar";
import VerifyList from "./VerifyList";
import "./PendingT.css";

function PendingT() {
  const pendingCoursesToBeVerified = [
    {
      name: "Aadil",
      courseName: "Mechanics",
      credits: "4",
    },
    {
      name: "Ayusg",
      courseName: "Chemistry",
      credits: "2",
    },
    ,
    {
      name: "Shiv",
      courseName: "Physics",
      credits: "3",
    },
    {
      name: "Jinish",
      courseName: "Drawing",
      credits: "2",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="verify-div">
        {pendingCoursesToBeVerified.map((course) => (
          <VerifyList
            name={course.name}
            courseName={course.courseName}
            credits={course.credits}
          />
        ))}
      </div>
    </>
  );
}

export default PendingT;
