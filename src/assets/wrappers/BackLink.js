import styled from "styled-components";

const Wrapper = styled.section`
  .back-link-container {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    .back-link {
      color: var(--accent-color);
      font-weight: 700;
    }
  }
  .back-link-icon-contianer {
    position: relative;
    .accent {
      color: var(--accent-color);
    }
    .back-link-icon {
      position: absolute;
      top: -11px;
      right: 3px;
      color: var(--accent-color);
    }
  }
`;

export default Wrapper;
