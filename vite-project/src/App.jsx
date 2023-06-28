import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Play from "./pages/Play";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
