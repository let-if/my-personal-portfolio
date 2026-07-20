// import AdminSidebar from "../components/admin/AdminSidebar";
// import AdminNavbar from "../components/admin/AdminNavbar";


// function AdminLayout({children}) {


// return (

// <div
// className="
// min-h-screen
// bg-slate-950
// text-white
// flex
// "
// >


// <AdminSidebar />


// <div
// className="
// flex-1
// "
// >


// <AdminNavbar />


// <main
// className="
// p-6
// lg:p-10
// "
// >

// {children}

// </main>


// </div>


// </div>

// );


// }


// export default AdminLayout;
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";

function AdminLayout({ children }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50 h-full lg:hidden">
            <AdminSidebar />
          </div>
        </>
      )}

      <div className="flex-1 min-w-0">

        {/* Mobile Menu */}
        <div className="sticky top-0 z-50 lg:hidden border-b border-white/10 bg-slate-950 px-4 py-3">

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-cyan-500 p-3 text-white"
          >
            <FaBars />
          </button>

        </div>

        <AdminNavbar />

        <main className="p-4 lg:p-10">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;