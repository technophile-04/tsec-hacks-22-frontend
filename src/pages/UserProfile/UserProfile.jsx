import Navbar from "./Navbar/Navbar";
import React from "react";
import UserDetail from "./UserDetail/UserDetail";
import Courses from "./UserDetail/Courses/Courses.js";

function UserProfile() {
  return (
    <>
      <Navbar />
      <UserDetail />
      <Courses />
    </>
  );
}

export default UserProfile;
