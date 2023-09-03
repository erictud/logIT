import styled from "styled-components";

const FullPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.5rem;
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    border: 4px solid var(--color-primary-600);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export default function Spinner({ message }) {
  return (
    <FullPage>
      <StyledSpinner>
        <div></div>
        <div></div>
      </StyledSpinner>
      {message && <p>{message}</p>}
    </FullPage>
  );
}
