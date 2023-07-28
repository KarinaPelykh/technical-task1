import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweet" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
