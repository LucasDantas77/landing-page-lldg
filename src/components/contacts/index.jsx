import { Container, UlContacts } from "./styles";
import WppLogo from "../../assets/wpplogo.png";
import EmailLogo from "../../assets/email.png";
import LinkedinLogo from "../../assets/linkedin.png";
import InstaLogo from "../../assets/instagram.png";

export const Contacts = () => {
  return (
    <Container>
      <div>
        <h2>
          Vamos nos <span>conectar</span> e solucionar seu site{" "}
          <span>juntos</span>!
        </h2>
      </div>
      <UlContacts>
        <li>
          <img src={WppLogo} alt="logo whatsapp" />
          <h3>Nosso Whatsapp</h3>
          <p>
            Estamos disponíveis para chat de voz vamos falar sobre criatividade
            juntos?
          </p>
          <a href="">Fale agora</a>
        </li>
        <li>
          <img src={EmailLogo} alt="logo email" />
          <h3>Nosso Email</h3>
          <p>Envie um email relatando feedbacks ou ideias</p>
          <a href="">mande seu email</a>
        </li>
        <li>
          <img src={LinkedinLogo} alt="Logo linkedin" />
          <h3>Nosso Linkedin</h3>
          <p>
            Podemos criar interações mais constantes assim como um
            compartilhamento de rede
          </p>
          <a href="">Acesse agora o linkedin</a>
        </li>
        <li>
          <img src={InstaLogo} alt="" />
          <h3>Nosso Instagram</h3>
          <p>
            Venha conhecer conteudos exclusivos e interagir com nossas
            publicações
          </p>
          <a href="">Acesse agora nosso instagram</a>
        </li>
      </UlContacts>
    </Container>
  );
};
