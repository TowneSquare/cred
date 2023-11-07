import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CredPoints from "./pages/credPoints";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { fetchCredPoints } from "./state/credPoints";
import { useEffect } from "react";
import Leaderboard from "./pages/leaderboard";
import About from "./pages/about";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCredPoints());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credPoints" element={<CredPoints />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
