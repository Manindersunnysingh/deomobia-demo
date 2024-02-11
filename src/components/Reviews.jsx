import Wrapper from "../assets/wrappers/Reviews";
import ReviewList from "./ReviewList";

const Reviews = () => {
  return (
    <Wrapper>
      <div className="review-container">
        <h4 className="review-title">What people say about us</h4>
        <div className="review-info">
          <ReviewList />
        </div>
      </div>
      <div className="review-orange-hexagon"></div>
    </Wrapper>
  );
};
export default Reviews;
