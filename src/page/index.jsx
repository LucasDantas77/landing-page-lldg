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
    </Container>
  );
};
