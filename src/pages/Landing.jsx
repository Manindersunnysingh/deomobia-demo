import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";

function Landing() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <section className="hero">
      <Header />
      <div className="hero-banner">
        <h1>
          We believe Australia deserves high-tech, affordable, green cities that
          are inspiring and safe.
        </h1>
        <p className="paragraph1">
          We work with people and organisations to bring this vision to life.
          Through strategic partnerships and community engagement, we align the
          essential elements that make cities thrive: innovation, accessibility,
          sustainability, and a sense of place.
        </p>
        <p className="paragraph2">
          Our work enhances existing cities and ensures new projects succeed by
          involving communities early for strong support from those who work,
          live, and play there.
        </p>
        <button className="btn hero-btn" onClick={() => handleOpenModal()}>
          CONTACT US
        </button>
      </div>
      {modal && <Modal onClose={handleCloseModal} />}
    </section>
  );
}
export default Landing;
