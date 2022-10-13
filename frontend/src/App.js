import './App.css';
import Navbar from './components/header/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}></Route>
                <Route path="/Home" element={<Navbar />}></Route>
                <Route path="/Reference" element={<Navbar />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
