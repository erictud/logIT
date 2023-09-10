import { styled } from "styled-components";
import { HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

import Heading from "../../ui/Heading";

import { formatDate } from "../../utils/dateHelpers";

const StyledDiaryPagePreview = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;

  &:not(:first-of-type) {
    margin: 0.4rem 0;
    border-top: 1px solid var(--color-gray-500);
  }
`;

const StyledDiaryPagePreviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & svg {
    font-size: 1.8rem;
  }
`;

const StyledDiaryPagePreviewBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    font-size: 1.8rem;
    fill: yellow;
    border: none;
  }
`;

export default function DiaryPagePreview({ page }) {
  const { created_at: creationDate, title, rating, id } = page;

  return (
    <StyledDiaryPagePreview to={`/diary/${id}`}>
      <StyledDiaryPagePreviewHeader>
        <Heading as="h3">{formatDate(creationDate)}</Heading>
      </StyledDiaryPagePreviewHeader>
      <StyledDiaryPagePreviewBody>
        <Heading as="h2">{title}</Heading>
        <StarsContainer>
          {new Array(rating === 1 ? 1 : rating - 1)
            .fill("1", 0, rating === 1 ? 1 : rating - 1)
            .map((_, i) => (
              <HiOutlineStar key={i} />
            ))}
        </StarsContainer>
      </StyledDiaryPagePreviewBody>
    </StyledDiaryPagePreview>
  );
}
