import { styled } from "styled-components";

import Heading from "../ui/Heading";
import CreateDiaryPageForm from "../features/diary/CreateDiaryPageForm";

const StyledPage = styled.main`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export default function CreateDiary() {
  return (
    <StyledPage>
      <Heading as="h2">Create a diary page</Heading>
      <CreateDiaryPageForm />
    </StyledPage>
  );
}
