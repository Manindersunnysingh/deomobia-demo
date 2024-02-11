import styled from "styled-components";

const Wrapper = styled.section`
  color: var(--white);
  background: linear-gradient(
    to right,
    var(--primary-500),
    var(--secondary-500)
  );
  min-height: 100vh;
  .contactus-container {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    .table {
      margin-top: 50px;
      width: 100%;
      border-collapse: collapse;
      background-color: var(--accent-color);
      color: white;
      th,
      td {
        padding: 10px;
        border: 1px solid white;
      }
    }
  }
`;
export default Wrapper;
