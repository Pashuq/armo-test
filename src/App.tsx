import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.scss";
import UserListPage from "./pages/UserListPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditUserPage from "./pages/EditUserPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserListPage />} />
          <Route path="user/new" element={<SinglePage />} />
          <Route path="user/:id" element={<EditUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
