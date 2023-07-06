import styled from "styled-components";
import { profileData } from "../utils/data";
import MemberProfile from "./MemberProfile";
const TeamProfile = () => {
  return (
    <Wrapper id="team-profile">
      <div className="center-container">
        <div className="title">
          <h2>
            <span>team</span> profile
          </h2>
          <div className="underline"></div>
        </div>
        <div className="profile-list">
          {profileData.map((profile) => {
            return <MemberProfile key={profile.id} {...profile} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #222222;
  .center-container {
    h2 {
      text-align: center;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--gray-400);
      margin-bottom: 0.5rem;
      span {
        color: var(--white);
      }
    }
  }
  .title {
    margin-bottom: 2rem;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--white);
    margin: 0 auto;
  }
  .profile-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: center;
    gap: 2rem;
  }
`;
export default TeamProfile;
