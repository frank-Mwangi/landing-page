import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="center-container">
        <div className="title">
          <h2 className="about-title">
            <span>about </span>us
          </h2>
          <div className="underline"></div>
        </div>
        <p>
          Faced with crippling unemployment levels after college, we opted to
          take the road less travelled and create employment. After thorough
          brainstorming, we settled on computers since we had knowledge in the
          field. A2Z was born amid jubilation and a sense of self-pride. Not
          long after, we noticed there was steep competition from older computer
          stores in the capital. To gain a competitive edge, we sought out to
          create an eCommerce platform to cater to the online demographic.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--gray-50);
  padding: 5rem 2rem;
  .center-container {
    h2 {
      text-transform: capitalize;
      text-align: center;
      letter-sapcing: var(--letter-spacing);
      margin-bottom: 0.5rem;
      span {
        color: var(--gray-500);
      }
    }
    .title {
      margin-bottom: 2rem;
    }
    .underline {
      width: 5rem;
      height: 0.25rem;
      background: #222222;
      margin: 0 auto;
    }
    p {
      color: var(--gray-700);
      letter-spacing: var(--letter-spacing);
      line-height: 1.6;
    }
  }
`;
export default About;
