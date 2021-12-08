import React from "react";
import { motion } from "framer-motion";
import Me from "../images/pic.png";
import { InfoDiv, InfoBox, InfoText } from "../styles/infoStyle";

export default function Info() {
  return (
    <InfoDiv
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "tweet", duration: 2, delay: 1 }}
    >
      <InfoBox>
        <InfoText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, color: "#000" }}
          transition={{ duration: 3, delay: 2 }}
        >
          <span style={{ fontSize: "40px", fontWeight: 900, color: "#23bcff" }}>
            Hello
          </span>{" "}
          I am Marko Front End Developer, on this site you can find more about
          me and my work, feel free to explore.
        </InfoText>
      </InfoBox>
      <InfoBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={Me} alt="profile"></img>
        </motion.div>
      </InfoBox>
    </InfoDiv>
  );
}
