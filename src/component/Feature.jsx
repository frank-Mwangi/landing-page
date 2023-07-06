import styled from "styled-components";

const Feature = (props) => {
  const { img, name, description } = props;
  return (
    <Wrapper>
      <div className="feature-info">
        <h4 className="feature-name">{name}</h4>
        <p className="feature-desc">{description}</p>
      </div>
      <img src={img} className="img" />
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .img {
    width: 100%;
    display: block;
    height: 300px;
    object-fit: cover;
  }
`;
export default Feature;
