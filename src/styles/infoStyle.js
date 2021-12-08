import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoDiv = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 65vw;
  height: 55vh;
  display: flex;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-left: 2px solid ${(props) => props.theme.darkColor};
  border-right: 2px solid ${(props) => props.theme.lightColor};
  border-top: 2px solid ${(props) => props.theme.lightColor};
  border-bottom: 2px solid ${(props) => props.theme.darkColor};
`;

export const InfoBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;

  > div > img {
    position: absolute;
    bottom: 0px;
    right: 50%;
    transform: translate(50%, 54%);
    width: 100%;
    height: auto;
    z-index: 0;

    @media (max-width: 540px) {
      top: 0;
      position: absolute;
    }
  }
`;

export const InfoText = styled(motion.p)`
  font-size: 28px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.darkColor};
  cursor: pointer;
  padding: 20px;
  justify-content: center;
  max-width: fit-content;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 22px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
  }
`;
