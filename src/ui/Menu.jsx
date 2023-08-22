import { createContext, useContext, useState } from "react";
import { styled } from "styled-components";

import { useOutsideClick } from "../hooks/useOutsideClick";

// styles

const StyledOpenButton = styled.button`
  z-index: 15;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledMenuElement = styled.div`
  z-index: 20;
  position: fixed;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;

  background-color: var(--color-primary-50);
  padding: 1rem 2rem;
  border: 1px solid var(--color-gray-500);
  border-radius: 0.25rem;
`;

const StyledButton = styled.div`
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  font-size: 1.4rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;

  &:hover {
    padding: 0.5rem 1rem;
  }
`;

const MenuCtx = createContext();

export default function Menu({ children }) {
  const [openID, setOpenID] = useState();
  const [position, setPosition] = useState([]);

  const close = () => setOpenID("");

  const open = setOpenID;

  return (
    <MenuCtx.Provider value={{ openID, close, open, position, setPosition }}>
      {children}
    </MenuCtx.Provider>
  );
}

function MenuContainer({ children }) {
  const { close } = useContext(MenuCtx);
  const ref = useOutsideClick(close);

  return <div ref={ref}>{children}</div>;
}

function OpenButton({ children, id }) {
  const { open, openID, close, setPosition } = useContext(MenuCtx);

  function toggle(e) {
    const rect = e.target?.closest("button")?.getBoundingClientRect();
    setPosition({ x: window.innerWidth - rect.width - rect.x, y: rect.height + rect.y + 8 });
    if (id !== openID || openID === "") open(id);
    else close();
  }

  return <StyledOpenButton onClick={toggle}>{children}</StyledOpenButton>;
}

function MenuButton({ children, onClick, disabled }) {
  const { close } = useContext(MenuCtx);

  return (
    <StyledButton
      disabled={disabled}
      type="svg"
      size="big"
      onClick={() => {
        onClick?.();
        close();
      }}
    >
      {children}
    </StyledButton>
  );
}

function MenuElement({ id, children }) {
  const { openID, position } = useContext(MenuCtx);

  if (openID !== id) return null;

  return <StyledMenuElement position={position}>{children}</StyledMenuElement>;
}

Menu.MenuContainer = MenuContainer;
Menu.OpenButton = OpenButton;
Menu.MenuElement = MenuElement;
Menu.MenuButton = MenuButton;
