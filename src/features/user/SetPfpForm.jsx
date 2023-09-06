import { useRef, useState } from "react";
import { styled } from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import FileInputRow from "../../ui/FileInputRow";
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

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  & img {
    max-width: 20vw;
  }

  & button {
    position: absolute;
    top: 0;
    right: 2%;
    background-color: none;
    border: none;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const Image = styled.img`
  max-width: 15vw;
`;

const ButtonContainers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
`;

export default function SetPfpForm({ currentPfp }) {
  const { updateCurrentUser, isLoading } = useUpdateUser();

  const pfpRef = useRef();
  const [newPfp, setNewPfp] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentUser({ pfp: newPfp });
    setNewPfp("");
    pfpRef.current.value = null;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2">Change the profile picture</Heading>
      <Row type="vertical">
        <Heading as="h4">Current profile picture</Heading>
        <Image src={currentPfp || "./default-user.jpg"} alt="user profile picture" />
      </Row>
      <FileInputRow
        accept="image/*"
        id="newPfp"
        label="New profile picture"
        inputRef={pfpRef}
        onChange={(e) => setNewPfp(e.target.files[0])}
      />
      {newPfp && (
        <ImageContainer>
          <button
            onClick={() => {
              setNewPfp("");
              pfpRef.current.value = null;
            }}
          >
            x
          </button>
          <img src={URL.createObjectURL(newPfp)} alt="Cover image" />
        </ImageContainer>
      )}
      <ButtonContainers>
        <Button
          type="reset"
          onClick={() => {
            setNewPfp("");
            pfpRef.current.value = null;
          }}
        >
          Reset
        </Button>
        <Button disabled={isLoading}>{isLoading ? <MiniSpinner /> : "Change"}</Button>
      </ButtonContainers>
    </Form>
  );
}
