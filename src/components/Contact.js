import React from "react";
import { ContactDiv, ContactLink} from "../styles/contactStyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <ContactDiv>
      <ContactLink href="https://github.com/MarkoBeg" target="_blank">
        <motion.Div
          animate={{ x: 500 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <GitHubIcon style={{ fontSize: "26px" }}></GitHubIcon>
        </motion.Div>
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/home" target="_blank">
        <motion.Div
          animate={{
            x: 500,
          }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <LinkedInIcon style={{ fontSize: "26px" }}></LinkedInIcon>
        </motion.Div>
      </ContactLink>

      <ContactLink href="mailTo:markobegdev@gmail.com">
        <motion.Div
          animate={{ x: 500 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <EmailIcon style={{ fontSize: "26px" }}></EmailIcon>
        </motion.Div>
      </ContactLink>
    </ContactDiv>
  );
}
