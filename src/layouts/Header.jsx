import { Link } from "react-router-dom";
import { Logo } from "../assets";
import NavActions from "../components/NavActions";
import NavLinks from "../components/NavLinks";

const Header = () => {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-10">
      <nav className="container mx-auto h-full flex items-center justify-between p-4">
        <Link to="/">
          <img src={Logo} alt="Pizza Shop Logo" />
        </Link>
        <NavLinks />
        <NavActions />
      </nav>
    </header>
  );
};

export default Header;
