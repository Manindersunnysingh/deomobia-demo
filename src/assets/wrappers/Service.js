import styled from "styled-components";

const Wrapper = styled.section`
  .container-1 {
    padding-top: 50px;
    background: var(--accent-color);
    color: var(--white);
    margin-bottom: 0;

    .box-container-1 {
      display: flex;
      gap: 50px 50px;
      padding: 0 50px;
      margin-bottom: 90px;
    }
    .info {
      flex: 1;
    }
    .container-1-title {
      font-size: 1.2rem;
      color: var(--grey-50);
    }
    .image {
      display: none;
    }
    .box-container-2 {
      margin: 20px auto 0 auto;
      width: 90vw;
      background: var(--white);
      padding: 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .ladder {
        width: 50px;
        height: 50px;
        margin: 0 auto 15px auto;
      }
      .title {
        color: var(--primary-500);
        text-align: center;
      }
      .description {
        color: var(--grey-700);
        text-align: center;
      }
    }
  }

  .container-2 {
    background: var(--grey-50);
    text-align: center;
    border: 1px solid var(--grey-50);
    .container-2-center {
      max-width: 1170px;
      margin: 0 auto;
      padding: 50px 50px 0 50px;

      .title {
        margin: 0 auto 1.5rem auto;
        max-width: 35rem;
        font-size: 1.25rem;
        font-weight: 700;
      }
      .description {
        letter-spacing: 1.2px;
        max-width: 100%;
        margin: 0 auto 40px auto;
      }
      .service-card-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px 0;
      }
      .service-card-container {
        max-width: 500px;
        background: var(--white);
        display: inline-block;
        padding: 40px 20px;
        border: 5px solid var(--grey-100);
        border-radius: 15px;
        position: relative;
        margin-bottom: 30px;
      }
      .popular {
        border: 5px solid var(--primary-500);
      }
      .mostPopular {
        position: absolute;
        width: 200px;
        padding: 5px 30px;
        background: var(--primary-500);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        top: -30px;
        left: 50%;
        transform: translate(-50%, 0);
        color: var(--white);
        text-transform: uppercase;
        font-size: var(--extra-small-text);
        font-weight: 700;
        letter-spacing: 2px;
      }

      .info {
        width: 40rem;
        margin: 0 auto;
      }
      .service-card-title {
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-weight: bold;
      }
      .service-card-duration {
        font-size: 1rem;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .service-card-price {
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 3px;
      }
      .service-card-feature {
        margin-top: 20px;
      }
    }
  }

  @media screen and (min-width: 840px) {
    .container-1 {
      .image {
        display: block;
        flex: 1;
        position: relative;
        .redHexagon {
          height: 50px;
          width: 50px;
        }
        .redCurve {
          position: absolute;
          top: -2px;
          left: 15px;
        }
        .orangeHexagon {
          height: 50px;
          width: 50px;
          position: absolute;
          right: -5px;
          top: -10px;
        }
        .orangeCurve {
          position: absolute;
        }
      }

      .info {
        width: 70%;
        margin: 0 auto;
      }
      .title {
        font-size: 1.5rem;
      }
      .box-container-2 {
        max-width: 60%;
      }
    }

    .container-2 {
      .service-card-wrapper {
        max-width: 100%;
        flex-direction: row !important;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .service-card-container {
        border: 50px solid green;
        max-width: 350px !important;
        align-self: stretch;
      }
    }
  }

  @media screen and (min-width: 968px) {
    .container-2 {
      .service-card-container {
        max-width: 31% !important;
      }
    }
  }
`;

export default Wrapper;
