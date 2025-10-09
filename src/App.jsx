import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { BuyPage } from "./pages/BuyPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { BasicLayout } from "./components/BasicLayout";
import { useAuthContext } from "./context/useAuthContext";
import { PageNotFound } from "./pages/PageNotFound";
import { RentPage } from "./pages/RentPage";
import { AdminPage } from "./pages/AdminPage";
import { SellPage } from "./pages/SellPage";

function App() {
  const { isLoggedIn, checkAdmin } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  // Check if user is admin
  useEffect(() => {
    const verifyAdmin = async () => {
      if (isLoggedIn) {
        const adminStatus = await checkAdmin();
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }
      setCheckingAdmin(false);
    };

    verifyAdmin();
  }, [isLoggedIn, checkAdmin]);

  if (checkingAdmin) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Auth Routes */}
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {/* Logged-in Routes  */}
          {isLoggedIn && (
            <>
              <Route path="/sell" element={<SellPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {isAdmin && <Route path="/admin" element={<AdminPage />} />}
            </>
          )}
        </Route>
        {/* Catch-all */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
