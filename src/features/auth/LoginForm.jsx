import styled from "styled-components";

import { useState } from "react";

import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import InputPasswordRow from "../../ui/InputPasswordRow";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export default function LoginForm() {
  // data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    // reset errors
    setEmailError("");
    setPasswordError("");

    if (email.length <= 1 && !email.trim().includes("@")) {
      setEmailError("Enter an invalid error");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Invalid password");
      return;
    }
  };

  return (
    <div>
      <StyledForm onSubmit={submitForm}>
        <Heading as="h2">Log in</Heading>
        <InputRow
          type="email"
          value={email}
          id="email"
          error={emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputPasswordRow
          type="password"
          value={password}
          id="password"
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Log in</Button>
      </StyledForm>
    </div>
  );
}
