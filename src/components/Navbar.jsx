import Wrapper from "../assets/wrappers/Navbar";
import { Logo } from "../components";
import { FiMenu } from "react-icons/fi";
import PageLinks from "./PageLinks";
import Sidebar from "./Sidebar";
import { useSidebarModalContext } from "../context/SidebarModalContext";

const Navbar = () => {
  const { openSidebar } = useSidebarModalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />

          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={openSidebar}
          >
            <FiMenu />
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <Sidebar />
      </div>
    </Wrapper>
  );
};
export default Navbar;
