import styled from "styled-components";
import Feature from "./Feature";
import { featureList } from "../utils/data";
const Features = () => {
  return (
    <Wrapper>
      <div className="center-container">
        <div className="title">
          <h2>Features</h2>
          <div className="underline"></div>
          <div className="feature-list">
            {featureList.map((feature) => {
              return <Feature key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--gray-50);
  padding-bottom: 3rem;
  .center-container {
  }
  .title {
    text-align: center;
    h2 {
      color: var(--gray-500);
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #222222;
    margin: 0 auto;
  }
  .feature-list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
export default Features;
