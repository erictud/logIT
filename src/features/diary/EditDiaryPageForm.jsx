import { useRef, useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-hot-toast";

import Button from "../../ui/Button";
import InputRow from "../../ui/InputRow";
import TextareaRow from "../../ui/TextareaRow";
import StarRating from "../../ui/StarRating";
import FileInputRow from "../../ui/FileInputRow";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

import { usePage } from "./usePage";
import { useEditDiaryPage } from "./useEditDiaryPage";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

const StyledFormExtremity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFormBody = styled.div`
  min-height: 65vh;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid var(--color-gray-700);
  padding: 1rem;

  & img {
    max-width: 40vw;
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

export default function EditDiaryPageForm() {
  const [formStep, setFormStep] = useState(1);

  const { isLoading: isUploading, editDiaryPage } = useEditDiaryPage();
  const { isLoading: isFetching, diaryPage } = usePage();

  // form data
  const [dayTitle, setDayTitle] = useState(function () {
    // if (!isFetched) return title;
    return "";
  });
  const [dayDescription, setDayDescription] = useState("");
  const [nrOfStars, setNrOfStars] = useState(-1);
  const [coverImage, setCoverImage] = useState("");
  const fileInputRef = useRef();

  // form error data
  const [dayTitleError, setDayTitleError] = useState("");
  const [dayDescriptionError, setDayDescriptionError] = useState("");

  if (isFetching) return <Spinner message="Getting diary page data..." />;

  const { id, title, description, rating, cover_image: coverImageLink } = diaryPage[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dayTitle && dayTitle.trim().length < 1) {
      setDayTitleError("Enter a valid title");
      setFormStep(1);
      return;
    }
    if (dayDescription && dayDescription.trim().length < 1) {
      setDayDescriptionError("Enter a valid title");
      setFormStep(1);
      return;
    }
    if (nrOfStars === 0) {
      toast.error("Set a valid rating (between 1-5)!");
      return;
    }

    let editData = {};

    if (dayTitle !== "") editData = { ...editData, title: dayTitle };

    if (dayDescription !== "") editData = { ...editData, description: dayDescription };

    if (nrOfStars !== -1) editData = { ...editData, rating: nrOfStars };

    editDiaryPage({
      editData,
      id,
      coverImage: coverImage || "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setNrOfStars(rating);
    setDayDescription(description);
    setDayTitle(title);
    setCoverImage("");
    fileInputRef.current.value = null;
  };

  return (
    <>
      {isUploading && <Spinner message="Uploading diary page..." />}
      {!isUploading && !isFetching && (
        <StyledForm onSubmit={handleSubmit}>
          <Heading as="h1">Edit diary page</Heading>
          <StyledFormExtremity>
            <p>{formStep}/2</p>
          </StyledFormExtremity>
          <StyledFormBody>
            {formStep == 1 && (
              <>
                <InputRow
                  id="title"
                  label="Edit title"
                  value={dayTitle || title}
                  onChange={(e) => setDayTitle(e.target.value)}
                  type="text"
                  error={dayTitleError}
                />
                <TextareaRow
                  id="description"
                  label="Edit description"
                  value={dayDescription || description}
                  onChange={(e) => setDayDescription(e.target.value)}
                  error={dayDescriptionError}
                />
              </>
            )}
            {formStep == 2 && (
              <>
                <StarRating onSetRating={setNrOfStars} value={rating} label="Edit rating" />
                <FileInputRow
                  id="cover"
                  label="Edit the cover image for the day"
                  accept="image/*"
                  onChange={(e) => {
                    setCoverImage(e.target.files[0]);
                  }}
                  inputRef={fileInputRef}
                />
                {(coverImage || coverImageLink) && (
                  <ImageContainer>
                    <button
                      onClick={() => {
                        setCoverImage("");
                        fileInputRef.current.value = null;
                      }}
                    >
                      x
                    </button>
                    <img
                      src={coverImage ? URL.createObjectURL(coverImage) : coverImageLink}
                      alt="Cover image"
                    />
                  </ImageContainer>
                )}
              </>
            )}
          </StyledFormBody>
          <StyledFormExtremity>
            {formStep > 1 && (
              <Button
                type="underlineBlack"
                size="big"
                onClick={(e) => {
                  e.preventDefault();
                  setFormStep((prev) => prev - 1);
                }}
              >
                &larr; back
              </Button>
            )}
            {formStep < 2 && (
              <Button
                type="underlineBlack"
                size="big"
                onClick={(e) => {
                  e.preventDefault();
                  setFormStep((prev) => prev + 1);
                }}
              >
                next &rarr;
              </Button>
            )}
            {formStep == 2 && (
              <Row>
                <Button type="reset" onClick={handleReset}>
                  Reset
                </Button>
                <Button disabled={isUploading}>Add diary page</Button>
              </Row>
            )}
          </StyledFormExtremity>
        </StyledForm>
      )}
    </>
  );
}

// https://zixqegipvospxofdkten.supabase.co/storage/v1/object/cover-images/public/cover-images/cover_image-89.png

// https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/cover-images/cover_image-89.png
