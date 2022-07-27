import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar/Nabar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homapage/Homepage";
import "./App.scss";

function App() {
  useEffect(() => {
    document.title = "Coffee Coffee";
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
