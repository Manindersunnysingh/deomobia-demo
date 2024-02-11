import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/BackLink";
const BackLink = ({ linkText, link }) => {
  return (
    <Wrapper>
      <div className="back-link-container">
        <div className="back-link-icon-contianer">
          <div className="back-link-icon">
            <FaLongArrowAltLeft />
          </div>
        </div>
        <div>
          <Link to={link} className="back-link">
            {linkText}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default BackLink;
