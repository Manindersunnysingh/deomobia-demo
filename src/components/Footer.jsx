import Wrapper from "../assets/wrappers/Footer";
import { socialIcons } from "../utils/data";

import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <ul className="footer-social-icon">
          {socialIcons.map((icon) => {
            return (
              <div key={icon.id}>
                <a
                  href={icon.href}
                  target="_blank"
                  className="footer-social-icon"
                  key={icon.id}
                >
                  {icon.icon}
                </a>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="copyright">
        copyright &copy; <span id="date"> {new Date().getFullYear()} </span>
        &nbsp;Demobia Pty Ltd
      </div>
    </Wrapper>
  );
};
export default Footer;
