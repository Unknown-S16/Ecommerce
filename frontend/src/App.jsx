import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Cluster from "./pages/header/Cluster";
import Grocery from "./pages/sections/Grocery";
import Credits from "./pages/footer/Credits";

export default function App() {
  const [On, setOn] = useState(false);

  return (
    <Router>
      {/* NavBar should be always visible */}
      <NavBar mode={On} setMode={setOn} />

      {/* Main Content with Routes */}
      <Routes>
        <Route path="/" element={<Cluster mode={On} />} />
        <Route path="/grocery" element={<Grocery mode={On} />} />
      </Routes>

      {/* Other Sections */}
      <Credits />
    </Router>
  );
}
