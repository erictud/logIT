import styled from "styled-components";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../ui/Spinner";

import { useUser } from "../features/auth/useUser";

const FullPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  // 1) fetch if user is logged in or not
  const { isLoading, isAuthenticated } = useUser();

  // 2) if is not loading & the user is not logged in => redirect to /auth
  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/auth", { replace: true });
  }, [isLoading, isAuthenticated, navigate]);

  // 3) if is loading => spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4) if everything is ok (user is logged in), load the content
  return children;
}
