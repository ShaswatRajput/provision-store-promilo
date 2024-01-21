import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import About from "./components/Pages/About";
import ProductPage from "./components/Pages/ProductPage";
import Navbar from "./components/Layout/Navbar";
import { LoginContext } from "./Contexts/LoginContext";
import { useState } from "react";
function App() {
  const accessToken = sessionStorage.getItem("accessToken");
  let initialStatus;
  if (!accessToken) {
    initialStatus = false;
  } else {
    initialStatus = true;
  }
  const [loginStatus, setLoginStatus] = useState(initialStatus);
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
