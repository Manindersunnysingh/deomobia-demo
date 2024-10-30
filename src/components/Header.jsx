import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
        {/* demobia */}
      </div>
      <a
        href="https://www.linkedin.com/company/demobia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="icon-linkedin" />
      </a>
    </div>
  );
}
export default Header;
