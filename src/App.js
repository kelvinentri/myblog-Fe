import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/*" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="create-post" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
