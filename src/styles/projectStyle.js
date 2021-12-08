import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectDiv = styled.div`
  background-color: ${(props) => props.theme.darkColor};
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`;

export const ProjectText = styled(motion.p)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 28px;
  position: absolute;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.lightColor};
  letter-spacing: 1.5px;
  text-align: center;
  cursor: pointer;
  top: 25%;
`;
