import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const fadeIn = keyframes`
    from{
        transform: translateX(-50rem);
        opacity: .5;
    }to{
        transform: translateX(0);
        opacity: 1;
    }
`;

const StyledSidebar = styled.nav`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 10;

  background: linear-gradient(45deg, var(--color-primary-50) 50%, var(--color-primary-100));
  animation: ${fadeIn} 0.5s ease;

  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export default function Sidebar({ closeNav }) {
  return createPortal(
    <StyledSidebar>
      {/* Logo */}
      <Logo />
      {/* Main nav */}
      <MainNav closeNav={closeNav} />
    </StyledSidebar>,
    document.getElementById("root")
  );
}
