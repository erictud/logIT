import { styled } from "styled-components";
import { HiOutlineClock, HiOutlineStar, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { usePage } from "./usePage";
import { useDeleteDiaryPage } from "./useDeleteDiaryPage";
import { formatDate } from "../../utils/dateHelpers";
import { Link } from "react-router-dom";

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

const DescriptionContainer = styled.div`
  width: 100%;
  min-height: 50vw;
  background-color: var(--color-gray-50);
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 6vh;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid var(--color-gray-300);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & button {
    padding: 1rem 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.7rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  & div {
    background-color: var(--color-gray-300);
    width: 1px;
    height: 5vh;
  }
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
  const { isDeleting, deleteDiaryPage } = useDeleteDiaryPage();

  if (isLoading) return <Spinner />;

  const { title, created_at, description, rating, cover_image, id } = diaryPage[0];

  return (
    <Page>
      <Heading as="h1">{title}</Heading>
      {cover_image && <Image src={`${cover_image}?cache=${Math.random()}`} alt={title} />}
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
      <DescriptionContainer>
        <Paragraph position="start">{description}</Paragraph>
      </DescriptionContainer>
      <Modal>
        <ButtonContainer>
          <Modal.Open opens="delete">
            <button>
              <HiOutlineTrash />
              Delete
            </button>
          </Modal.Open>
          <div></div>
          <Link to="edit">
            <button>
              <HiOutlinePencil />
              Edit
            </button>
          </Link>
        </ButtonContainer>
        <Modal.Window name="delete">
          <ConfirmDelete
            isDeleting={isDeleting}
            onConfirmDelete={() => deleteDiaryPage(id)}
            resourceName="diary page"
          />
        </Modal.Window>
      </Modal>
    </Page>
  );
}
