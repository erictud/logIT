import styled from "styled-components";

import { useState } from "react";

import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import InputPasswordRow from "../../ui/InputPasswordRow";
import MiniSpinner from "../../ui/MiniSpinner";

import { useSignup } from "./useSignup";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export default function LoginForm() {
  // data
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // errors
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  //
  const { isLoading, signup } = useSignup();

  const submitForm = async (e) => {
    e.preventDefault();

    // reset errors
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setPasswordConfirmError("");

    // error handling
    if (email.length <= 1 && !email.trim().includes("@")) {
      setEmailError("Enter an invalid error");
      return;
    }
    if (username.length < 3) {
      setUsernameError("Username min length should be three!");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Minimum password length should be 8 characters");
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError("Passwords do not match!");
      return;
    }

    await signup({ email, password, username });
  };

  return (
    <div>
      <StyledForm onSubmit={submitForm}>
        <Heading as="h2">Sign up</Heading>
        <InputRow
          type="email"
          value={email}
          id="email"
          error={emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputRow
          type="text"
          value={username}
          id="username"
          error={usernameError}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputPasswordRow
          type="password"
          value={password}
          id="password"
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputPasswordRow
          type="password"
          value={passwordConfirm}
          id="passwordConfirm"
          label="confirm password"
          error={passwordConfirmError}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button>{isLoading ? <MiniSpinner /> : "Sign up"}</Button>
      </StyledForm>
    </div>
  );
}
