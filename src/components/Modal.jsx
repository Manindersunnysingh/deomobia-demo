import { FaTimes } from "react-icons/fa";
import { useSidebarModalContext } from "../context/SidebarModalContext";
const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useSidebarModalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <div>{children}</div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
