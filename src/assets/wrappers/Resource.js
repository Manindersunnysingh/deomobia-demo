import styled from "styled-components";

const Wrapper = styled.section`
  color: var(--white);
  background: linear-gradient(
    to right,
    var(--primary-500),
    var(--secondary-500)
  );

  .resource-container {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 70px 0 40px 0;
  }
  .resource-info-title {
    font-size: 1.6rem;
  }

  .resource-item-container {
    background: var(--white);
    color: var(--black);
    border-radius: var(--borderRadius);
    padding: 15px 30px;
    margin-bottom: 20px;
    letter-spacing: 1.2px;
  }
  .resource-item-info h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .resource-item-description {
    margin-bottom: 5px;
    font-size: 0.8rem;
    letter-spacing: 1.2px;
  }
  .pdf-btn {
    padding-right: 35px;
    position: relative;
    .arrow-down {
      position: absolute;
      margin: 0 5px;
      top: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    .resource-container {
      display: flex;
      gap: 0 30px;
    }
    .resource-info {
      flex: 3;
    }
    .resource-info-title {
      font-size: 1.6rem;
    }
    .resource-item {
      flex: 9;
    }
    .resource-item-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0 15px;
    }
    .resource-item-info {
      flex: 8;
    }
  }
`;

export default Wrapper;
