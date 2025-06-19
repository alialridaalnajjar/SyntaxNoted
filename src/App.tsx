import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NoteTakingPage from "./pages/NoteTakingPage";
import HomePage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NoteTakingPage" element={<NoteTakingPage />} />
          <Route path="/ToDoListPage" element={<ToDoListPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/EventsPage" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
