import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CreateService from './Pages/ServicesList'
import RegisterService from './Pages/RegisterService'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<CreateService />} />
        <Route path="/register" element={<RegisterService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
