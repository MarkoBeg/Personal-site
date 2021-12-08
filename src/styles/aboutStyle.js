import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.div)`
  display: flex;
  position: absolute;
  background: #000;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const AboutBoxLeft = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: whitesmoke;
  left: 50%;
  width: 0;
  transform: translate(0%, 0%);
  margin: 0 45px;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const AboutBoxRight = styled(motion.div)`
  position: relative;
  top: 25%;
  right: 50%;
  width: 100%;
  height: 0;
  background: ${(props) => props.theme.darkColor};
  transition: height 1s ease, width 0.5s ease 0.5s;
  border-left: 3px solid ${({ theme: { lightColor } }) => lightColor};
  border-right: 3px solid ${({ theme: { lightColor } }) => lightColor};
  border-radius: 10px;

  @media (max-width: 540px) {
    border: none;
  }

  &:hover {
    background: #000;
    transition: 0.5s ease-in-out;
  }
`;

const spin = keyframes`
from {
  transform: rotate: (0deg);
}
to{
  transform: rotate(360deg)
}
`;

export const AboutText = styled(motion.h3)`
  color: ${(props) => props.theme.darkColor};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 1.4px;
  width: fit-content;
  text-decoration: none;
  display: flex;
  text-align: center;
  justify-content: center;
  text-align: center;
  padding: 25px;
  position: absolute;
  line-height: 2;

  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
    width: fit-content;
  }
  @media (max-width: 370px) {
    font-size: 16px;
    width: fit-content;
  }
`;
export const AboutImg = styled(motion.img)`
  border-radius: 10px;
  border: 1px solid transparent;
  height: 375px;
  width: auto;
  cursor: pointer;
  animation: ${spin} 10s linear infinite;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const AboutHeader = styled(motion.h2)`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 35px;
  color: ${(props) => props.theme.lightColor};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 1.4px;

  @media (max-width: 540px) {
    font-size: 24px;
    text-align: center;
  }
`;
export const HomeButton = styled.button`
  position: fixed;
  top: 5%;
  right: 0;
  transform: rotate(45deg) translate(25%, 105%);
  color: ${(props) => props.theme.darkColor};
  background: transparent;
  font-weight: 900;
  z-index: 2;
  font-size: 26px;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 999px;
`;

export const AboutSpan = styled(motion.span)`
  position: relative;
  top: 50vh;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 1.1px;
  color: ${(props) => props.theme.darkColor};
  font-size: 28px;
  font-weight: 900;
  max-width: 520px;
  text-shadow: 6px 3px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
    width: fit-content;
  }
  @media (max-width: 370px) {
    font-size: 16px;
    width: fit-content;
  }
`;
