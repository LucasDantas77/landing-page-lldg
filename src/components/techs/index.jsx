import LogoHtml from "../../assets/htmllogo.png";
import LogoCss from "../../assets/css.png";
import node from "../../assets/node.png";
import jslogo from "../../assets/jslogo.png";
import tslogo from "../../assets/tslogo.png";
import pythonLogo from "../../assets/python.png";
import postgres from "../../assets/postgres.png";
import react from "../../assets/react.png";
import { Container, UlTech } from "./style";

export const TechsList = () => {
  return (
    <Container>
      <h2>Tecnologias com as quais trabalhamos</h2>
      <UlTech>
        <li>
          <img src={LogoHtml} alt="html logo" />
        </li>
        <li>
          <img src={LogoCss} alt="" />
        </li>
        <li>
          <img src={jslogo} alt="" />
        </li>
        <li>
          <img src={tslogo} alt="" />
        </li>
        <li>
          <img src={react} alt="" />
        </li>
        <li>
          <img src={node} alt="" />
        </li>
        <li>
          <img src={postgres} alt="" />
        </li>
        <li>
          <img src={pythonLogo} alt="" />
        </li>
      </UlTech>
    </Container>
  );
};
