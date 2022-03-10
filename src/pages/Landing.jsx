import { Container, Image } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";
import Section1 from "../components/Landing/Section1";
import Section2 from "../components/Landing/Section2";
import {
  extendTheme,
  ColorModeScript,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const Landing = () => {
  const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
  });

  console.log(theme);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Button onClick={toggleColorMode}></Button>
      <Container maxW="100%" p="0">
        <Navbar />
        <Hero />
      </Container>
      <Container maxW="100%" bg="white">
        <Section1 />
      </Container>
      <Image src="assets/images/section2.svg" />
      <Container maxW="100%">
        <Section2 />
      </Container>
    </>
  );
};

export default Landing;
