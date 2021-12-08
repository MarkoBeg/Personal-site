import React from "react";
import {
  MainBody,
  About,
  HomeButton,
  Center,
  LightDiv,
  Project,
} from "../styles/mainStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/Theme";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Info from "./Info";

export default function Main() {
  let navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <MainBody>
        <HomeButton onClick={() => navigate("/")}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Home
          </motion.p>
        </HomeButton>
        <Contact></Contact>
        <About onClick={() => navigate("/about")}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            animate={{ y: 200, color: "#000" }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            About me
          </motion.h2>
        </About>
        <Project onClick={() => navigate("/projects")}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            animate={{ y: 200, color: "#000" }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Projects
          </motion.h2>
        </Project>
        <LightDiv click={click}></LightDiv>
        <Center
          onClick={() => handleClick()}
          animate={{
            y: click ? 420 : 0,
            x: click ? 800 : 0,
          }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileHover={{ scale: [0.8, 1.1], rotate: 360, transition: 2 }}
        >
          Find more
        </Center>
        {click ? <Info></Info> : null}
      </MainBody>
    </ThemeProvider>
  );
}
