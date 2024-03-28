import Home from "../Components/Home";
import Contact from "../Components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
