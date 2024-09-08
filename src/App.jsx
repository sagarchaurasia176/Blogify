import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Core/Navbar";
import Home from "./Components/Home";
import "./App.css";
const App = () => {
  return (
    <>
      {/* navabar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
