import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Rent } from "./pages/Rent";
import { Sell } from "./pages/Sell";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { BasicLayout } from "./components/BasicLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
