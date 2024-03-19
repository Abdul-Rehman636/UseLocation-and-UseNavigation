import About from "./Components/About/About";
import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

// useNavigate
// redirect
// useLocation
