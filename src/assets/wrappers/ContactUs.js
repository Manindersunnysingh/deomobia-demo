import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;

  background: linear-gradient(
    to right,
    var(--primary-500),
    var(--secondary-500)
  );
  padding: 3rem 2rem 4rem;

  .form {
    background: var(--white);
    margin: 0;
    border-radius: var(--borderRadius);
    padding: 30px;
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .form-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
    text-align: center;
    color: var(--primary-500);
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .span-full-row {
      grid-column: 1 / -1;
    }
    .submit-btn {
      max-width: 300px;
      margin: 40px auto 0 auto;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
