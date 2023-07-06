import styled from "styled-components"
const Modal = ({closeSidebar}) => {
  return (
    <Wrapper className="modal-container">
            <ul>
                <li><a onClick={closeSidebar} href="#hero">home</a></li>
                <li><a onClick={closeSidebar} href="#about">about us</a></li>
                <li><a onClick={closeSidebar} href="#team-profile">team profile</a></li>
            </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    position: fixed;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0; 
    right: 0; 
    bottom: 0;
    padding: 4rem 2rem;
    ul {
        a {
            color: var(--gray-50);
            letter-spacing: 2px;
            text-transform: capitalize;
            font-size: 1.5rem;
            transition: var(--transition);
            &:hover {
                border-bottom: 1px solid var(--gray-50);
            }
        }        
    }
    @media(min-width: 700px) {
        display: none;
    }
`
export default Modal