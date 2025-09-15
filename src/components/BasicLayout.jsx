import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { FooterShimmer, NavbarShimmer } from "../pages/ShimmerUi";


function BasicLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <NavbarShimmer /> : <Navbar />}
      <main className="pt-[100px] min-h-screen">
        <Outlet />
      </main>
      {loading ? <FooterShimmer /> : <Footer />}
    </>
  );
}

export { BasicLayout };
