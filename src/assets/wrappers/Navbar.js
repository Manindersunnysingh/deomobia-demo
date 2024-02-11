import styled from "styled-components";
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  height: var(--nav-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo {
    height: 30px;
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-toggle {
    background: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    color: var(--primary-500);
    cursor: pointer;
    transition: var(--transition);
    display: block;
  }
  .nav-toggle:hover {
    transform: scale(1.2);
  }
  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
    color: var(--primary-500);
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
  }
  .nav-link:hover {
    color: var(--primary-500);
    background: var(--primary-500);
    padding-left: 2.25rem;
  }
  /* nav toggle functionality */
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-links {
    height: 280px;
  }
  /* nav at bigger screen size */
  @media screen and (min-width: 992px) {
    /* hide nav toggle button */
    .nav-toggle {
      display: none;
    }
    /* show links */
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* optional */
      flex-wrap: wrap;
    }
    .nav-header {
      padding: 0 0;
    }
    .nav-link {
      padding: 0 0;
    }
    .nav-link:hover {
      padding: 0;
      color: var(--primary-200);
      background: transparent;
    }
    .nav-icons {
      display: flex;
    }

    .nav-link {
      margin-right: 0.7rem;
    }
    .nav-icon {
      margin-right: 0.7rem;
      color: var(--primary-500);
      font-size: 1.2rem;
      transition: var(--transition);
    }
    .nav-icon:hover {
      color: var(--primary-800);
    }
  }
`;
export default Wrapper;
