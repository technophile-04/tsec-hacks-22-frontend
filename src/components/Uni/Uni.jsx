import { useState } from "react";
import NavBar from "../../pages/UserProfile/Navbar/Navbar";
import UniSec1 from "../../components/Uni/UniSec1";
import Course from "./Course";
import "./Uni.css";

function Uni() {
  const college = {
    name: "D.J. Sanghvi College of Engineering",
    courses: [
      { name: "FLAT", credit: 9, year: 1 },
      { name: "FLAT", credit: 9, year: 1 },
      { name: "FLAT", credit: 9, year: 1 },
    ],
  };
  const { courses } = college;

  // const [college, setCollege] = useState({
  //   name: "D.J. Sanghvi College of Engineering",
  //   courses: [
  //     { name: "FLAT", credit: 9, year: 1 },
  //     { name: "FLAT", credit: 9, year: 1 },
  //     { name: "FLAT", credit: 9, year: 1 },
  //   ],
  // });
  return (
    <>
      <NavBar />
      <UniSec1 name={college.name} />
      <div className="uni-courses">
        {courses.map((cou) => {
          return <Course name={cou.name} credit={cou.credit} year={cou.year} />;
        })}
      </div>
    </>
  );
}

export default Uni;
