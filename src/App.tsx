import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hompage from "./components/Hompage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/NewsDettails/:newsId" element={<Hompage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
