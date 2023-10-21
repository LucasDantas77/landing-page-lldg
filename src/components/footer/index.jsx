import Logo from "../../assets/Logo.jpeg";

export const Fotter = () => {
  return (
    <footer>
      <div>
        <h3>Fundado por</h3>
        <p>Phelipe</p>
        <p>Denis Guedes</p>
        <p>Gean Santos</p>
        <p>Lucas Dantas</p>
      </div>
      <img src={Logo} alt="Logo" />
      <span>@2023</span>
    </footer>
  );
};
