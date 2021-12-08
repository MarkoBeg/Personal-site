import styled from "styled-components";

export const ContactDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(90deg) translate(-85%, 10%);
  display: flex;
  justify-content: space-around;

  @media (max-width: 992px) {
    transform: rotate(90deg) translate(-85%, -55%);
  }
`;

export const ContactLink = styled.a`
  color: ${(props) => props.theme.lightColor};
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  
  &:hover {
    color: #23bcff;
    opacity: 0.8;
  }
`;

export const Div = styled.div``;
