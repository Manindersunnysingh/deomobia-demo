import Wrapper from "../assets/wrappers/Hero";
import hero from "../assets/images/hero.svg";
import { FaArrowDownLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="hero">
        <div className="hero-banner">
          <h3>Unlock career hacks and understand the job market like a pro</h3>
          <p>
            Job hunting is tough—from finding the right role to crafting a
            winning CV, networking with confidence and avoiding costly mistakes.
          </p>
          <p>
            Sometimes it feels like you need to become an expert in hiring, but
            we’ve got you covered. Our resources decode it all so you can focus
            on your field and advance your career.
          </p>
          <a href="#resources" className="btn btn-primary ">
            View our resources
          </a>
          <div className="coaching-packages">
            <a href="#services" className="coaching-packages-link">
              Or preview our coaching packages
            </a>
            <span className="coaching-packages-link-icon">
              <FaArrowDownLong />
            </span>
          </div>
        </div>

        <div className="hero-img">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
