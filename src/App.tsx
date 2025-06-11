import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NoteTakingPage from "./pages/NoteTakingPage";
import HomePage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";


function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/NoteTakingPage" element={<NoteTakingPage />} />
           <Route path="/ToDoListPage" element={<ToDoListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
