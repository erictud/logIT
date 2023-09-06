import styled from "styled-components";

import { useEffect, useState } from "react";

import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import InputPasswordRow from "../../ui/InputPasswordRow";
import MiniSpinner from "../../ui/MiniSpinner";

import { useLogin } from "./useLogin";
import { getUserDetails } from "../../services/apiAuth";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export default function LoginForm() {
  // data
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("12341234");

  // errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //
  const { login, isLoading } = useLogin();

  const submitForm = async (e) => {
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

    await login({ email, password });
  };

  //testing

  useEffect(() => {
    (async () => {
      await getUserDetails();
    })();
  }, []);

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
        <Button>{isLoading ? <MiniSpinner /> : "Log in"}</Button>
      </StyledForm>
    </div>
  );
}
