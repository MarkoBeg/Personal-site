import React from "react";
import { ProjectDiv, ProjectText } from "../styles/projectStyle";
import { HomeButton } from "../styles/mainStyle";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  let navigate = useNavigate();
  return (
    <ProjectDiv>
      <ProjectText
        initial={{ opacity: 0 }}
        animate={{ y: 150, opacity: 1, scale: 2 }}
        transition={{ type: "Inertia", ease: "easeOut", duration: 1, delay: 2 }}
        href={{}}
      >
        <a
          href="https://markobeg.github.io/React-Personal-Website/"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          My Work
        </a>
      </ProjectText>
      <HomeButton onClick={() => navigate("/")} style={{ color: "#fff" }}>
        Home
      </HomeButton>
    </ProjectDiv>
  );
}
