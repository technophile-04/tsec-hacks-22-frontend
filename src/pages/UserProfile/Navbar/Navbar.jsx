import React from "react";

import { ArrowBackIcon } from "@chakra-ui/icons/";
import { Heading, Button, Box } from "@chakra-ui/react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <Heading color="#fff"> Bank Of Academic Credit</Heading>
        <Button
          leftIcon={<ArrowBackIcon />}
          color="white"
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
