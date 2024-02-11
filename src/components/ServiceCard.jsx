import { serviceCardData } from "../utils/data";
import { useNavigate } from "react-router-dom";
const ServiceCard = () => {
  const navigate = useNavigate();
  return (
    <>
      {serviceCardData.map((cardData) => {
        const { title, popular, duration, price, features } = cardData;
        return (
          <div
            className={
              popular
                ? "service-card-container  popular"
                : "service-card-container"
            }
            key={title}
          >
            {popular && <div className="mostPopular">most popular</div>}
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-duration">{duration}</p>
            {price.map((singlePrice) => {
              return (
                <p className="service-card-price" key={singlePrice}>
                  {singlePrice}
                </p>
              );
            })}

            {features.map((singlefeature) => {
              return (
                <p className="service-card-feature" key={singlefeature}>
                  {singlefeature}
                </p>
              );
            })}

            <a href="#contact-us" className="btn btn-primary ">
              Enquire
            </a>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;
