import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AIChat from "../components/AIChat/AIChat";
function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
      <AIChat/>
    </div>
  );
}

export default MainLayout;