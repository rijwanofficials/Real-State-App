import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

function BasicLayout() {
    return (
        <>
            <Navbar />
            <main className="pt-[100px] min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export { BasicLayout };
