import { Contacts } from "../components/contacts";
import { Fotter } from "../components/footer";
import { HeaderPage } from "../components/header";
import { Infos } from "../components/infos";
import { TechsList } from "../components/techs";
import { Container } from "./style";

export const HomePage = () => {
  return (
    <Container>
      <HeaderPage />
      <Infos />
      <TechsList />
      <Contacts />
      <Fotter />
    </Container>
  );
};
