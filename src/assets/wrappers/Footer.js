import styled from "styled-components";

const Wrapper = styled.main`
  background: var(--accent-light);
  color: var(--white);
  padding: 80px 0;
  margin: 0 auto;

  .container {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    .footer-links {
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 0 30px;
      margin-bottom: 25px;
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
    }
    .footer-link {
      color: var(--white);
    }
    .footer-social-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--white);
      gap: 0 30px;
      margin-bottom: 15px;
    }
  }
  .copyright {
    margin-top: 30px;
    text-align: center;
  }
  @media screen and (min-width: 640px) {
    .container {
      padding: 0 120px;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      flex-direction: column;
      padding: 0;
      .footer-links {
        margin-bottom: 60px;
        flex-direction: row;
      }
      .footer-social-icon {
        flex-direction: row;
      }
    }
  }
`;

export default Wrapper;
