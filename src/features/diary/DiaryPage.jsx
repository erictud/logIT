import { styled } from "styled-components";
import { HiOutlineClock, HiOutlineStar } from "react-icons/hi2";

import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

import { usePage } from "./usePage";
import { formatDate } from "../../utils/dateHelpers";
import Paragraph from "../../ui/Paragraph";

const Page = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  max-width: 20vw;
`;

const DetailRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DetailElement = styled.div`
  color: var(--color-gray-700);
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  & svg {
    font-size: 2rem;
  }

  &:first-of-type {
    border-right: 1px solid var(--color-gray-500);
  }
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 2.5rem;
    fill: yellow;
    border: none;
  }
`;

export default function DiaryPage() {
  const { diaryPage, isLoading } = usePage();

  if (isLoading) return <Spinner />;

  const { title, created_at, description, rating, cover_image } = diaryPage[0];

  return (
    <Page>
      <Heading as="h1">{title}</Heading>
      {cover_image && <Image src={cover_image} alt={title} />}
      <DetailRow>
        <DetailElement>
          <HiOutlineClock />
          {formatDate(created_at)}
        </DetailElement>
        <StarsContainer>
          {new Array(rating === 1 ? 1 : rating - 1)
            .fill("1", 0, rating === 1 ? 1 : rating - 1)
            .map((_, i) => (
              <HiOutlineStar key={i} />
            ))}
        </StarsContainer>
      </DetailRow>
      <Paragraph position="start">{description}</Paragraph>
    </Page>
  );
}
