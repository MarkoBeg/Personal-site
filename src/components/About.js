import React from "react";
import {
  AboutBoxLeft,
  AboutSection,
 
  AboutBoxRight,
  AboutText,
  AboutImg,
  AboutHeader,
  HomeButton,
  AboutSpan,
} from "../styles/aboutStyle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import world from "../images/world.svg";

export default function About() {
  let navigate = useNavigate();

  return (
    <AboutSection
      initial={{ height: 0 }}
      animate={{ y: 0, x: 0, height: "100vh" }}
      transition={{ ease: "easeIn", type: "tweet", duration: 1, delay: 1 }}
    >
      
        <HomeButton onClick={() => navigate("/")}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 2 }}
            whileHover={{ scale: 0.7, transition: 1, delay: 1 }}
          >
            Home
          </motion.p>
        </HomeButton>
        <AboutBoxLeft
          initial={{ opacity: 0 }}
          animate={{ height: "100vh", width: "100vw", opacity: 1 }}
          transition={{ type: "Inertia", duration: 1.5, delay: 1 }}
        >
          <AboutText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "Inertia", duration: 2, delay: 4 }}
          >
            <AboutImg
              drag
              dragConstraints={{
                top: -100,
                left: -100,
                right: 100,
                bottom: 100,
              }}
              whileDrag={{ scale: 1.8 }}
              src={world}
              alt={"Earth"}
              dragElastic={0.9}
            ></AboutImg>
          </AboutText>
          <AboutSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 4 }}
          >
            I am Front-End Developer interested in making beautiful websites or
            functional applications... Feel free to contact me 🖐🏻
          </AboutSpan>
        </AboutBoxLeft>
        <AboutBoxRight
          initial={{ opacity: 0 }}
          animate={{ height: "55vh", opacity: 1 }}
          transition={{ type: "tween", duration: 1.5, delay: 1 }}
        >
          <AboutHeader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 2, delay: 3 }}
          >
            MySkills
          </AboutHeader>
          <AboutText
            style={{ textAlign: "center", color: "white", top: "25%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "Inertia", duration: 2, delay: 4 }}
          >
            HTML, CSS, JavaScript, React, Redux, TailwindCSS, SQL, Node.js,
            MongoDB, Styled Components, Firebase...
          </AboutText>
        </AboutBoxRight>
    </AboutSection>
  );
}
