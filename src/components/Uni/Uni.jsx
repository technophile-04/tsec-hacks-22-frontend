import { useEffect, useState } from "react";
import NavBar from "../../pages/UserProfile/Navbar/Navbar";
import UniSec1 from "../../components/Uni/UniSec1";
import Course from "./Course";
import "./Uni.css";
import { Button, Heading } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function Uni() {
  const params = useParams();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
  }, [courses]);
  

  const college = {
    name: "D.J. Sanghvi College of Engineering",
    courses: [
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
      { name: "FLAT", credit: 9, year: 1, Department: "IT" },
    ],
  };
  const { courses:tempCourses } = college;

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
      <div style={{ padding:"20px 0"}} className="course-heading">
        <h3 id="courses-heading" style={{fontWeight:"bold",padding:"20px 0"}}>Courses Offered</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          minHeight: "40vh",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {tempCourses.map((cou) => {
          return (
            <Course
              name={cou.name}
              credit={cou.credit}
              year={cou.year}
              dep={cou.Department}
            />
          );
        })}
      </div>

      <div className="uni-buttons" margin="20px 0">
        <Link to={`/uni/verify/${params.id}`}>
          <button>Verify </button>
        </Link>
        <Link to={`/uni/transfer/${params.id}`}>
          <button>View Transfers</button>
        </Link>
      </div>
    </>
  );
}

export default Uni;
