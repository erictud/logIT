import { styled } from "styled-components";

import ChangeUsernameForm from "../features/user/ChangeUsernameForm";
import SetPfpForm from "../features/user/SetPfpForm";
import Spinner from "../ui/Spinner";

import { useUser } from "../features/user/useUser";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
`;

export default function Account() {
  const {
    isLoading,
    user: {
      user_metadata: { username, pfp },
    },
  } = useUser();

  if (isLoading) return <Spinner />;

  return (
    <Page>
      {/* change username */}
      <ChangeUsernameForm currentUsername={username} />
      {/* change pfp */}
      <SetPfpForm currentPfp={pfp} />
    </Page>
  );
}
