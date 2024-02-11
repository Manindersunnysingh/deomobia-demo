import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(
    to right,
    var(--primary-500),
    var(--secondary-500)
  );
  color: var(--white);
  .blog-container {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .blog {
      background: var(--white);
      color: var(--grey-800);
      border-radius: var(--borderRadius);
      text-align: left;
      padding: 15px 30px;
      margin-bottom: 30px;
      letter-spacing: 1.2px;
      padding: 40px;
      align-items: center;
      .blog-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .blog-title {
        font-size: 2.2rem;
        margin-bottom: 20px;
      }
      .blog-action {
        align-self: start;
        display: flex;
        font-size: 1.3rem;
        gap: 0 20px;
      }
    }
  }
`;

export default Wrapper;
