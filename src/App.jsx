import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import { QueryClient, QueryClientProvider } from "react-query";

import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Diaries from "./pages/Diaries";
import CreateDiaryPage from "./pages/CreateDiaryPage";
import Diary from "./pages/Diary";
import EditDiary from "./pages/EditDiary";
import Account from "./pages/Account";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Layout from "./ui/Layout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 6000,
          success: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
          },
        }}
      />
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
              <Route path="create" element={<CreateDiaryPage />} />
              <Route path=":id">
                <Route index element={<Diary />} />
                <Route path="edit" element={<EditDiary />} />
              </Route>
            </Route>
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
