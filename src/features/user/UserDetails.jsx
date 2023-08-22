import { styled } from "styled-components";
import { useUser } from "../auth/useUser";

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

export default function UserDetails() {
  const { user } = useUser();

  return (
    <StyledUserDetails>
      <StyledPfp
        src={user?.user_metadata?.pfp || "./default-user.jpg"}
        alt="user profile picture"
      />
    </StyledUserDetails>
  );
}
