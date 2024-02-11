import styled from "styled-components";

const Wrapper = styled.aside`
  @media screen and (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 5px;
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
    overflow: scroll;
    width: var(--fluid-width);

    padding: 0;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: var(--secondary-100);
    border-radius: var(--borderRadius);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 25px;
    right: 15px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--accent-light);
    cursor: pointer;
  }
  .sidebar-logo {
    padding-top: 4rem;
  }
  .sidebar-links {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
  }
  .sidebar-link {
    display: flex;
    align-items: center;
    color: var(--accent-color);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: var(--letterSpacing);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .sidebar-link:hover {
    color: var(--primary-800);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;
export default Wrapper;
