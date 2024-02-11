import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--accent-color);
  color: var(--grey-50);

  .review-container {
    background: var(--accent-light);
    clip-path: polygon(
      1% 0%,
      1% 0%,
      1% 58%,
      1% 80%,
      52% 100%,
      52% 100%,
      100% 80%,
      100% 58%,
      100% 0%,
      100% 0%
    );
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    height: 700px;
    padding: 30px;

    .review-title {
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
      padding-top: 30px;
      margin-bottom: 20px;
    }
    .review-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .reviewlist-container {
        padding: 0 5px 0 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .test {
          position: relative;
          .reviewlist-image {
            clip-path: polygon(
              50% 0%,
              100% 25%,
              100% 75%,
              50% 100%,
              0% 75%,
              0% 25%
            );
            width: 125px; /* Adjust the size as needed */
            height: 125px; /* Adjust the size as needed */
            object-fit: cover; /* Maintain aspect ratio and cover the hexagon shape */
            margin-bottom: 20px;
          }
          .orangeHexagon {
            position: absolute;
            width: 75px;
            height: 75px;
            top: 6%;
            left: 53%;
            z-index: -1;
          }
        }
        .reviewlist-description {
          font-size: 0.8rem;
          ${"" /* letter-spacing: 0.7px; */}
          font-style: italic;
          margin-bottom: 15px;
        }
        .reviewlist-name {
          font-size: var(--small-text);
          text-align: center;
          font-weight: 500;
          letter-spacing: 1.4px;
        }
      }
      .reviewlist-orange-hexagon-container {
        margin: 0 auto;
        width: 100px;
        display: flex;
        justify-content: center;
        gap: 0 10px;
      }
      .reviewlist-orange-hexagon {
        color: white;
        background-color: var(--secondary-500);
        width: 10px;
        height: 10px;
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 74%, 0 25%);
        margin: 0 auto;
      }
    }
  }
  .review-orange-hexagon {
    background: var(--secondary-500);
    width: 100px;
    height: 100px;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 74%, 0 25%);
    margin: 0 auto;
    position: relative;
    bottom: 75px;
    border-radius: 25px;
  }

  @media screen and (min-width: 468px) {
    .review-container {
      height: 600px;
    }
  }

  @media screen and (min-width: 768px) {
    .review-container {
      height: 575px;
      .review-title {
        font-size: 1.4rem;
        margin-bottom: 60px;
      }

      .review-info {
        .reviewlist-container {
          flex-direction: row;
          margin-bottom: 50px;
          .reviewlist-image-container {
            text-align: center;
            flex: 5;
            .reviewlist-image {
              width: 175px;
              height: 175px;
              display: inline-block;
            }
            .orangeHexagon {
              top: 10%;
              left: 60%;
            }
          }
          .reviewlist-description-container {
            flex: 7;
            .reviewlist-description {
              margin-bottom: 30px;
              font-size: 0.9rem;
            }
            .reviewlist-name {
              font-size: 1.1rem;
              text-align: left;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .review-container {
      .test {
        width: 65%;
        margin: 0 auto;

        .orangeHexagon {
          top: 8%;
          left: 20%;
          z-index: 1000;
        }
      }
    }
  }
`;

export default Wrapper;
