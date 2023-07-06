import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
const Feature = (props) => {
  const { icon, name, description } = props;
  return (
    <Wrapper>
      <div className="feature-info">
        <span>{icon}</span>
        <h4 className="feature-name">{name}</h4>
        <div className="underline"></div>
        <p className="feature-desc">{description}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: #222222;
  color: var(--white);
  border-radius: 5px;
  padding: 1rem;
  box-shadow: var(--shadow-2);
  .feature-name {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--white);
  }
  svg {
    font-size: 2rem;
  }
`;
export default Feature;
