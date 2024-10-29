function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Us</h2>
        <p>Email: mporteous@demobia.com</p>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;
