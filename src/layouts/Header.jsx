import { Logo } from "../assets";

const Header = () => {
  return (
    <header className="">
      <nav className="">
        <a href="/">
          <img src={Logo} alt="Pizza Shop Logo" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
