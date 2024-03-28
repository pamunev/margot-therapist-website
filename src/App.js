import "./App.css";
import Layout from "./Layout/index";
import Menu from "./Layout/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
