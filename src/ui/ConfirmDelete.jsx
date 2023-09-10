import styled from "styled-components";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Spinner from "./Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & h2 {
    text-align: center;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export default function ConfirmDelete({ onCloseModal, resourceName, onConfirmDelete, isDeleting }) {
  return (
    <Container>
      {isDeleting ? (
        <Spinner message={`Deleting ${resourceName}`} />
      ) : (
        <>
          <Heading as="h2">Are you sure you want to delete this {resourceName}</Heading>
          <Paragraph>Note that this action is irreversible</Paragraph>
          <ButtonRow>
            <Button type="transparent" onClick={onCloseModal}>
              Take me back
            </Button>
            <Button type="reset" onClick={onConfirmDelete} disabled={isDeleting}>
              Delete {resourceName}
            </Button>
          </ButtonRow>
        </>
      )}
    </Container>
  );
}
