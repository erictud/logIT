import styled from "styled-components";

import Tabbed from "../ui/Tabbed";
import Logo from "../ui/Logo";

import LoginForm from "../features/auth/LoginForm";
import SignupForm from "../features/auth/SignupForm";

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
  padding-top: 10rem;
  background-color: var(--color-gray-100);
`;

export default function Login() {
  return (
    <StyledPage>
      <Logo />

      <Tabbed defaultValue="login">
        <Tabbed.ButtonRow>
          <Tabbed.ButtonElement opens="login">log in</Tabbed.ButtonElement>
          <Tabbed.ButtonElement opens="signup">sign up</Tabbed.ButtonElement>
        </Tabbed.ButtonRow>
        <Tabbed.Tab id="login">
          <LoginForm />
        </Tabbed.Tab>
        <Tabbed.Tab id="signup">
          <SignupForm />
        </Tabbed.Tab>
      </Tabbed>
    </StyledPage>
  );
}
