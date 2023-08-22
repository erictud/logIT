import { useState } from "react";
import { styled } from "styled-components";
import { HiOutlineBars3BottomLeft, HiOutlineXMark } from "react-icons/hi2";

import Logo from "./Logo";
import UserDetails from "../features/user/UserDetails";
import Sidebar from "./Sidebar";

const StyledHeader = styled.header`
  padding: 0.3rem 0.5rem;
  border-bottom: 1px solid;
  border-image: linear-gradient(right, var(--color-gray-400) 50%, var(--color-gray-700));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavButton = styled.div`
  font-size: 3rem;
  cursor: pointer;
  z-index: 15;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function closeNav() {
    setNavIsOpen(false);
  }

  return (
    <>
      <StyledHeader>
        {/* Button for opening/closing the navigation */}
        <NavButton onClick={() => setNavIsOpen((prev) => !prev)} role="button">
          {navIsOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomLeft />}
        </NavButton>
        {/* Logo */}
        <Logo icon={false} />
        {/* User details */}
        <UserDetails />
      </StyledHeader>
      {navIsOpen && <Sidebar closeNav={closeNav} />}
    </>
  );
}
