import { styled } from "styled-components";
import {FaBars} from "react-icons/fa"
const Navbar = ({openSidebar}) => {
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
        <button>
          <FaBars onClick={openSidebar}/>
        </button>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #222222;
  .center-container {
    display: flex;
    justify-content: flex-end;
    ul {
      display: none;
    }
    button {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }
    svg {
      font-size: 2rem;
      color: white;
    }
  }
  @media(min-width: 700px) {
    .center-container {
      justify-content: center;
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
            border-bottom: 1px solid var(--white);
          }
        }
      }
      button {
        display: none;
      }
    }
  }
`;
export default Navbar;
