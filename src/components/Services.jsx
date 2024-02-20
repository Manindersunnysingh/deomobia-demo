import Wrapper from "../assets/wrappers/Service.js";
import ServiceCard from "./ServiceCard.jsx";
import orangeCurve from "../assets/images/orangeCurve.svg";
import orangeHexagon from "../assets/images/orangeHexagon.svg";
import redCurve from "../assets/images/redCurve.svg";
import redHexagon from "../assets/images/redHexagon.svg";
import ladder from "../assets/images/ladder.svg";
import Resource from "./Resource.jsx";

const Services = () => {
  return (
    <Wrapper>
      <div className="container-1">
        <div className="box-container-1">
          <div className="info">
            <h4 className="container-1-title">
              The job market is a maze and searching for your dream job can
              leave you lost.
            </h4>
            <p>
              The myriad of job listings, skill requirements, industry jargon or
              lack of clear career pathways can be disorienting. Navigating the
              market can be tough and making the wrong move can be costly.
            </p>
          </div>
          <div className="image">
            <img src={redHexagon} alt="image" className="redHexagon" />
            <img src={redCurve} alt="image" className="redCurve" />
          </div>
        </div>

        <div className="box-container-1">
          <div className="image">
            <img src={orangeCurve} alt="image" className="orangeCurve" />
            <img src={orangeHexagon} alt="image" className="orangeHexagon" />
          </div>
          <div className="info">
            <h4 className="container-1-title">
              We’re here to help you understand how to get yourself where you
              want to be
            </h4>
            <p>
              Whether you’re an entry-level professional or you’ve decided to
              make a career change, breaking into a new and competitive field
              can seem like an insurmountable task.
            </p>
            <p>Demobia will help you map a clear pathway.</p>
          </div>
        </div>

        <div className="box-container-2">
          <img src={ladder} alt="image" className="ladder" />
          <div className="title">
            There’s no point climbing a career ladder - if it’s leaning against
            the wrong wall
          </div>
          <p className="description">
            We're not just here to unlock your greatest abilities, help you
            understand the market, or to deploy tips to catch the eye of hiring
            managers — we're here to help you define where you want to go.
          </p>
          <p className="description">
            As your personalised training partners, we go beyond conventional
            job-ready services, offering resources and personalised coaching to
            empower your journey.
          </p>
          <p className="description">
            Because it's not just about climbing; it's about you reaching the
            destination that matters to you.
          </p>
        </div>
      </div>

      <Resource />

      <div className="container-2" id="services">
        <div className="container-2-center">
          <h2 className="title">
            We also offer coaching packages built to get you started, and stay
            moving.
          </h2>
          <p className="description">
            Our coaching is structured to help you secure a role that matches
            your ambition, while offering deeper insights into both the job
            market and yourself.
          </p>

          <div className="service-card-wrapper">
            <ServiceCard />
          </div>
          <div className="description">
            <p>
              For a personalised kickstart, our one-off coaching session delves
              deep into understanding you. Expect a comprehensive meeting loaded
              with market insights, strategies, and tailored recommendations to
              set you on the path to deserved compensation.
            </p>
            <p>
              If you're really committed, our 3 to 6-month packages are tailored
              for consistency. With weekly check-ins, these packages ensure the
              ongoing completion of strategies, tactics, and work, providing
              sustained momentum for your career advancement.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;
