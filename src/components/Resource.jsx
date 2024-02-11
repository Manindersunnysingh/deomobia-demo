import Wrapper from "../assets/wrappers/Resource";
import ResourceItem from "./ResourceItem";
const Resource = () => {
  return (
    <Wrapper>
      <div className="resource-container" id="resources">
        <div className="resource-info">
          <h3 className="resource-info-title">Resources</h3>
          <p>
            Been a while since you’ve updated your resume or written a cover
            letter?
          </p>
          <p>We’ve got you covered, this stuff’s our bread and butter. </p>
          <p>
            Download our free handy templates and better understand what hiring
            managers look for when they read your resume.
          </p>
        </div>
        <div className="resource-item">
          <ResourceItem />
        </div>
      </div>
    </Wrapper>
  );
};
export default Resource;
