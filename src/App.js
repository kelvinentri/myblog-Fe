import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import { Auth, AvoidLogin } from "./FeAuth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AvoidLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<Auth />}>
          <Route path="/*" element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="countries" element={<Home />}></Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
