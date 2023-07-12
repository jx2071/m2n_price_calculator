import "./output.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Price from "./Price";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
