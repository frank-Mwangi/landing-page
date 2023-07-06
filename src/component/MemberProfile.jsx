import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MemberProfile = ({
  name,
  profile_img,
  info,
  git_profile,
  ln_profile,
  twitter,
}) => {
  return (
    <Wrapper>
      <img className="profile-img" src={profile_img} alt={name} width="50px" />
      <div className="profile-info">
        <h5 className="member-name">{name}</h5>
        <p className="member-info">{info}</p>
      </div>
      <div className="contact">
        <a href={git_profile} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href={ln_profile} target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: transparent;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition);
  &:hover {
    transform: scale(1.02);
  }
  .profile-img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    border: 3px solid var(--gray-100);
    object-fit: cover;
  }
  .member-name {
    color: var(--white);
    letter-spacing: var(--letter-spacing);
  }

  .member-info {
    text-align: left;
    letter-spacing: var(--letter-spacing);
    color: var(--gray-400);
  }
  .contact {
    display: flex;
    justify-content: center;
    gap: 1rem;
    svg {
      color: var(--white);
      font-size: 1.5rem;
      transition: var(--transition);
      &:hover {
        color: var(--gray-500);
        transform: scale(1.2);
      }
    }
  }
`;
export default MemberProfile;
