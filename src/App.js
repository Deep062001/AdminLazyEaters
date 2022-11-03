import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from './Pages/Food/Food';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
