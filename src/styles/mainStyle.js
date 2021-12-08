import styled from "styled-components";
import { motion } from "framer-motion";

export const MainBody = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { bgColor } }) => bgColor};
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  overflow: hidden;
`;
export const About = styled.div`
  position: absolute;
  top: 8%;
  left: -10%;
  transform: rotate(-90deg) translate(-85%, 10%);
  color: ${(props) =>
    props.click ? props.theme.darkColor : props.theme.lightColor};
  z-index: 99;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  @media (max-width: 992px) {
    font-size: 20px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -25%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -30%;
  }
  @media (max-width: 540px) {
    font-size: 16px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -40%;
  }
`;

export const Project = styled.div`
  position: absolute;
  bottom: 16%;
  left: -10%;
  transform: rotate(-90deg) translate(15%, 45%);
  color: ${(props) =>
    props.click ? props.theme.darkColor : props.theme.lightColor};
  z-index: 99;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  @media (max-width: 992px) {
    font-size: 20px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -25%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -30%;
  }
  @media (max-width: 540px) {
    font-size: 16px;
    transform: rotate(-90deg) translate(-50%, 10%);
    left: -40%;
  }
`;

export const HomeButton = styled.button`
  position: fixed;
  top: 5%;
  right: 0;
  transform: rotate(45deg) translate(25%, 105%);
  color: ${(props) => props.theme.lightColor};
  background: transparent;
  font-weight: 900;
  font-size: 26px;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 999px;

  @media (max-width: 992px) {
    font-size: 22px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
  }
`;

export const Center = styled(motion.h6)`
  font-size: 24px;
  font-weight: "600";
  position: absolute;
  top: 45%;
  cursor: pointer;
  left: 45%;
  color: #fff;
  &:hover {
    color: #23bcff;
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    left: 40%;
  }
  @media (max-width: 540px) {
    font-size: 22px;
    left: 38%;
  }
  @media (max-width: 375px) {
    font-size: 20px;
    left: 36%;
  }
`;

export const LightDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
  bottom: 0;
  right: 50%;
  width: ${({ click }) => (click ? "50%" : "0%")};
  height: ${({ click }) => (click ? "100%" : "0%")};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
