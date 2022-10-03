import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import BatchesPages from "./Pages/BatchesPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "75%" }}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/dashboard" element={<MainPage />}></Route>
          <Route path="/batchs" element={<BatchesPages />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
