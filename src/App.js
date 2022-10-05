import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import BatchesPages from "./Pages/BatchesPage";
import MainPage from "./Pages/MainPage";
import ParticipantsList from "./Pages/ParticipantsList";
import TrainerPage from "./Pages/TrainerPage";
import UserPerBatchPage from "./Pages/UsersPerBatchPage";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "75%" }}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/dashboard" element={<MainPage />}></Route>
          <Route path="/batchs" element={<BatchesPages />}></Route>
          <Route path="/list" element={<ParticipantsList />}></Route>
          <Route path="/trainer" element={<TrainerPage />}></Route>
          <Route path="/listPerBatch" element={<UserPerBatchPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
