import { useState } from "react";
import { styled } from "styled-components";

import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import MiniSpinner from "../../ui/MiniSpinner";

import { useUpdateUser } from "./useUpdateUser";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

const ButtonContainers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
`;

export default function ChangeUsernameForm({ currentUsername }) {
  const { updateCurrentUser, isLoading } = useUpdateUser();
  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentUser({ username: newUsername });
    setNewUsername("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2">Change the username</Heading>
      <InputRow
        label="Current username"
        id="currUsername"
        value={currentUsername}
        disabled={true}
      />
      <InputRow
        label="New username"
        id="newUsername"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <ButtonContainers>
        <Button
          type="reset"
          onClick={() => {
            setNewUsername("");
          }}
        >
          Reset
        </Button>
        <Button disabled={isLoading}>{isLoading ? <MiniSpinner /> : "Change"}</Button>
      </ButtonContainers>
    </Form>
  );
}
