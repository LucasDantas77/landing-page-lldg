import Logo from "../../assets/Logo.jpeg";
import { DivHeader, HeaderSty } from "./style";

export const HeaderPage = () => {
  return (
    <HeaderSty>
      <DivHeader>
        <h3>
          O site que você deseja e procura está aqui na <span>LLDG</span>
        </h3>
        <p>Venha saber mais sobre a gente e adquirir o site perfeito!</p>
      </DivHeader>
      <img src={Logo} alt="Logo lldg" />
    </HeaderSty>
  );
};
