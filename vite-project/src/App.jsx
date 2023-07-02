import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Play from "./pages/Play";
import FlashCard from "./pages/FlashCard";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/:category" element={<FlashCard />} />
      </Routes>
    </div>
  );
}

export default App;
