import styled from "styled-components";
const Wrapper = styled.section`
  .hero {
    width: 90vw;
    max-width: 1170px;
    margin: 2rem auto 4rem auto;
    background: var(--white);
  }

  .hero-banner {
    max-width: 45rem;
    color: var(--clr-white);
  }

  .hero-banner p {
    color: var(--clr-white);
    letter-spacing: var(--spacing);
  }
  ${
    "" /* .coaching-packages{
    margin-top:10px;
    font-weight:700;
    position:relative;
  .coaching-packages-link{
    color:var(--accent-color); 
    padding-right:5px;
  }
  .coaching-packages-link-icon{
  position:absolute;
  top:4px;
  }
  } */
  }
  .coaching-packages {
  margin-top: 10px;
  display: flex;
  gap: 10px 5px;
  height:2rem;
  .coaching-packages-link { 
    color: var(--accent-color);
  }
  .coaching-packages-link-icon {
    margin-top:auto;
  }
}

  .hero-img {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .hero {
      height:calc(100vh - var(--nav-height;))
      margin: 0 auto ;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .hero-banner {
      flex: 1;
      padding: 0 0 0 4rem;
    }
    .hero-banner p {
      max-width: 45rem;
    }
    .hero-img {
      display: block;
      flex: 1;
      padding: 3rem;
    }
  }

  @media screen and (min-width: 992px) {
  }
`;

export default Wrapper;
