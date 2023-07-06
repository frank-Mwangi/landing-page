import { styled } from "styled-components";
const Navbar = () => {
  return (
    <Nav>
      <div className="center-container">
        <ul>
          <li>
            <a href="#hero">home</a>
          </li>
          <li>
            <a href="#about">about us</a>
          </li>
          <li>
            <a href="#team-profile">team profile</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #222222;
  .center-container {
    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      li {
        cursor: pointer;
        color: var(--gray-100);
        transition: var(--transition);
        &:hover {
          // color: var(--gray-400);
          border-bottom: 1px solid var(--white);
        }
      }
    }
  }
`;
export default Navbar;
