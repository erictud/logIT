import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { HiOutlineHome, HiPlus, HiOutlineUser, HiMiniMagnifyingGlass } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  list-style-type: none;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;

  & svg {
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
  }
`;

const linkList = [
  {
    linkName: "Home",
    icon: HiOutlineHome,
    path: "diary",
  },
  {
    linkName: "Find more about the app",
    icon: HiMiniMagnifyingGlass,
    path: "",
  },
  {
    linkName: "Create a diary page",
    icon: HiPlus,
    path: "diary/create",
  },
  {
    linkName: "Account settings",
    icon: HiOutlineUser,
    path: "account",
  },
];

export default function MainNav({ closeNav }) {
  return (
    <NavList>
      {linkList.map((link) => (
        <NavItem onClick={closeNav} to={`/${link.path}`} key={link.path}>
          <link.icon />
          {link.linkName}
        </NavItem>
      ))}
    </NavList>
  );
}
