import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import FloatingButtons from "../Components/FloatingButtons";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingButtons/>
      <Footer />
    </div>
  );
}

export default Layout;