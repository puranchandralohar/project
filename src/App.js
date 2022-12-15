import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { SignIn } from "./Components/SignInForm/SignInForm";
import { Dashboard } from "./Components/Body/Dashboard";
// import { ErrorPage } from "./Components/Errorpage/Errorpage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<ErrorPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
