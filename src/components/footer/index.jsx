import Logo from "../../assets/Logo.jpeg";
import { Container, DivContainer, DivNames } from "./style";

export const Fotter = () => {
  return (
    <Container>
      <DivContainer>
        <DivNames>
          {" "}
          <h3>Fundado por:</h3>
          <p>Phelipe Lani</p>
          <p>Denis Guedes</p>
          <p>Gean Santos</p>
          <p>Lucas Dantas</p>
        </DivNames>

        <img src={Logo} alt="Logo" />
      </DivContainer>

      <span>@2023</span>
    </Container>
  );
};
