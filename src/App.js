import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoToTop from "./components/GoToTop/GoToTop";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polymers" element={<Card />} />
      </Routes>
      <GoToTop />
    </BrowserRouter>
  );
}

export default App;
