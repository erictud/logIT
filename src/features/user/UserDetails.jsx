import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowRightOnRectangle, HiUser } from "react-icons/hi2";

import { useUser } from "../auth/useUser";
import { useLogout } from "./useLogout";

import Menu from "../../ui/Menu";
import Heading from "../../ui/Heading";
import MiniSpinner from "../../ui/MiniSpinner";

const StyledUserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPfp = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
`;

export default function UserDetails() {
  const { user } = useUser();
  const { isLoading, logout } = useLogout();

  return (
    <Menu>
      <Menu.MenuContainer>
        <Menu.OpenButton id="user-info">
          <StyledUserDetails>
            <StyledPfp
              src={user?.user_metadata?.pfp || "./default-user.jpg"}
              alt="user profile picture"
            />
          </StyledUserDetails>
        </Menu.OpenButton>
        <Menu.MenuElement id="user-info">
          <Container>
            <StyledPfp
              src={user?.user_metadata?.pfp || "./default-user.jpg"}
              alt="user profile picture"
            />
            <Heading as="h2">{user?.user_metadata?.username}</Heading>
            <Heading as="h3">{user?.email}</Heading>
            <Menu.MenuButton>
              <StyledLink to="/account">
                <HiUser />
                User settings
              </StyledLink>
            </Menu.MenuButton>
            <Menu.MenuButton onClick={logout}>
              <HiArrowRightOnRectangle />
              Log out {isLoading && <MiniSpinner />}
            </Menu.MenuButton>
          </Container>
        </Menu.MenuElement>
      </Menu.MenuContainer>
    </Menu>
  );
}
