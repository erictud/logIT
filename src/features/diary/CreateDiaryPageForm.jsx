import { useRef, useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-hot-toast";

import Button from "../../ui/Button";
import InputRow from "../../ui/InputRow";
import TextareaRow from "../../ui/TextareaRow";
import StarRating from "../../ui/StarRating";
import FileInputRow from "../../ui/FileInputRow";
import Row from "../../ui/Row";

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

export default function CreateDiaryPageForm() {
  // step One - user inputs a title and a description
  // step Two - user rates the day out of 5 & adds a cover image
  // step Three - user can set his position on the map
  const [formStep, setFormStep] = useState(1);

  // form data
  const [dayTitle, setDayTitle] = useState("");
  const [dayDescription, setDayDescription] = useState("");
  const [nrOfStars, setNrOfStars] = useState(0);
  const [coverImage, setCoverImage] = useState("");
  const fileInputRef = useRef();

  // form error data
  const [dayTitleError, setDayTitleError] = useState("");
  const [dayDescriptionError, setDayDescriptionError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dayTitle.trim().length < 1) {
      setDayTitleError("Enter a valid title");
      setFormStep(1);
      return;
    }
    if (dayDescription.trim().length < 1) {
      setDayDescriptionError("Enter a valid title");
      setFormStep(1);
      return;
    }
    if (nrOfStars === 0) {
      toast.error("Set a valid rating (between 1-5)!");
      return;
    }

    console.log("success");
  };

  const handleReset = (e) => {
    e.preventDefault();

    setNrOfStars(0);
    setDayDescription("");
    setDayTitle("");
    setCoverImage("");
    fileInputRef.current.value = null;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormExtremity>
        <p>{formStep}/2</p>
      </StyledFormExtremity>
      <StyledFormBody>
        {formStep == 1 && (
          <>
            <InputRow
              id="title"
              label="Give your day a title"
              value={dayTitle}
              onChange={(e) => setDayTitle(e.target.value)}
              type="text"
              error={dayTitleError}
            />
            <TextareaRow
              id="description"
              label="Describe your day"
              value={dayDescription}
              onChange={(e) => setDayDescription(e.target.value)}
              error={dayDescriptionError}
            />
          </>
        )}
        {formStep == 2 && (
          <>
            <StarRating onSetRating={setNrOfStars} value={nrOfStars} />
            <FileInputRow
              id="cover"
              label="Enter a cover image for the day"
              accept="image/*"
              onChange={(e) => {
                setCoverImage(URL.createObjectURL(e.target.files[0]));
              }}
              inputRef={fileInputRef}
            />
            {coverImage && (
              <ImageContainer>
                <button
                  onClick={() => {
                    setCoverImage("");
                    fileInputRef.current.value = null;
                  }}
                >
                  x
                </button>
                <img src={coverImage} alt="Cover image" />
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
            <Button>Add diary page</Button>
          </Row>
        )}
      </StyledFormExtremity>
    </StyledForm>
  );
}
