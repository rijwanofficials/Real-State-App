import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import { Home } from "./pages/Home";
import { BuyPage } from "./pages/BuyPage";
import { Sell } from "./pages/Sell";
import {  AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { BasicLayout } from "./components/BasicLayout";
import { useAuthContext } from "./context/useAuthContext";
import {PageNotFound} from "./pages/PageNotFound";
import { RentPage } from "./pages/RentPage";

function App() {
  const { isLoggedIn, appLoading } = useAuthContext();

  if (appLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // 👉 CASE 1: NOT LOGGED IN
  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // 👉 CASE 2: LOGGED IN
  else if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export { App };
