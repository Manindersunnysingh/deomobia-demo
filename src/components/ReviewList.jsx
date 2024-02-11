import { useState } from "react";
import orangeHexagon from "../assets/images/orangeHexagon.svg";
import { reviewData } from "../utils/data";

const ReviewList = () => {
  const [reviewNumber, setReviewNumber] = useState(0);
  return (
    <>
      {reviewData.map((review) => {
        if (review.id === reviewNumber) {
          return (
            <div className="reviewlist-container" key={review.id}>
              <div className="reviewlist-image-container">
                <div className="test">
                  <img
                    className="reviewlist-image"
                    src={`/src/assets/images/${review.image}.jpg`}
                    alt={review.image}
                  />
                  <img
                    src={orangeHexagon}
                    alt="image"
                    className="orangeHexagon"
                  />
                </div>
              </div>
              <div className="reviewlist-description-container">
                <p className="reviewlist-description">
                  {review.review.length > 500
                    ? `${review.review.slice(0, 500)}...`
                    : review.review}
                </p>
                <p className="reviewlist-name">{review.name}</p>
              </div>
            </div>
          );
        }
      })}
      <div className="reviewlist-orange-hexagon-container">
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="reviewlist-orange-hexagon"
            onClick={() => setReviewNumber(review.id)}
          ></div>
        ))}
      </div>
    </>
  );
};
export default ReviewList;
