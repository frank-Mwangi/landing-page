import styled from "styled-components";
import logo from "../assets/a2z-logo.png";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="center-container">
        <h1 className="hero-title">
          A<span>2</span>Z
        </h1>
        <h2 className="hero-tagline">we're digitally yours</h2>
        <a href="https://a2z-tech.netlify.app/" className="btn">
          explore project
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #222222;
  background-image: url("../public/hero-img-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;

  .hero-title {
    font-size: 4rem;
    color: var(--white);
    letter-spacing: 4px;
    margin: 0;
    span {
      color: var(--gray-400);
    }
  }
  .hero-tagline {
    margin: 0;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .center-container {
    text-align: center;
  }

  .btn {
    display: inline-block;
    margin-top: 2rem;
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
    &:hover {
      background: var(--white);
      color: var(--gray-900);
    }
  }
`;
export default Hero;
