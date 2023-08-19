import styled from "styled-components";

import { createContext, useContext, useState } from "react";

import Button from "./Button";

const TabbedCtx = createContext();

// styles

const StyledTabbed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function Tabbed({ children, defaultValue }) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  return (
    <TabbedCtx.Provider value={{ isOpen, setIsOpen }}>
      <StyledTabbed>{children}</StyledTabbed>
    </TabbedCtx.Provider>
  );
}

function ButtonRow({ children }) {
  return <StyledButtonRow>{children}</StyledButtonRow>;
}

function ButtonElement({ opens, children }) {
  const { setIsOpen, isOpen } = useContext(TabbedCtx);

  return (
    <Button
      type="secondary"
      size="medium"
      onClick={() => setIsOpen(opens)}
      active={isOpen === opens}
    >
      {children}
    </Button>
  );
}

function Tab({ id, children }) {
  const { isOpen } = useContext(TabbedCtx);

  if (isOpen !== id) return null;

  return children;
}

Tabbed.ButtonRow = ButtonRow;
Tabbed.ButtonElement = ButtonElement;
Tabbed.Tab = Tab;
