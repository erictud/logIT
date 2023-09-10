import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Warning({ message, link, linkText }) {
  return (
    <Container>
      <img src="./notFound.svg" />
      <Heading as="h1">{message}</Heading>
      <Link to={link}>
        <Button>{linkText}</Button>
      </Link>
    </Container>
  );
}
