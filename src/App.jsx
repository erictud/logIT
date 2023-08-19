import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Diaries from "./pages/Diaries";
import CreateDiary from "./pages/CreateDiary";
import Diary from "./pages/Diary";
import EditDiary from "./pages/EditDiary";
import Account from "./pages/Account";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Layout from "./ui/Layout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<Auth />} />
          <Route path="/" element={<Landing />} />
          <Route
            element={
              <ProtectedRoutes>
                <Layout />
              </ProtectedRoutes>
            }
          >
            <Route path="diary">
              <Route index element={<Diaries />}></Route>
              <Route path="create" element={<CreateDiary />} />
              <Route path=":id">
                <Route index element={<Diary />} />
                <Route path="edit" element={<EditDiary />} />
              </Route>
            </Route>
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
