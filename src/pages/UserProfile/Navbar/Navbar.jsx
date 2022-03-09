import React from "react";

import { ArrowBackIcon } from "@chakra-ui/icons/";
import { Heading, Button, Box } from "@chakra-ui/react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <Heading color="black"> Academic Bank Of Credit</Heading>
        <Button
          leftIcon={<ArrowBackIcon />}
          color="black"
          bg="whiteAlpha.200"
          border="2px"
        >
          {" "}
          Logout
        </Button>
      </div>
    </>
  );
}

export default Navbar;
