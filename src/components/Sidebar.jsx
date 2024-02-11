import Wrapper from "../assets/wrappers/Sidebar";
import { FaTimes } from "react-icons/fa";
import { Logo } from "../components";
import PageLinks from "./PageLinks";
import { useSidebarModalContext } from "../context/SidebarModalContext";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarModalContext();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <header className="sidebar-logo">
            <Logo />
          </header>
          <PageLinks parentClass="sidebar-links" itemClass="sidebar-link" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
