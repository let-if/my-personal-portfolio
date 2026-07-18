// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </MainLayout>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";


// Admin pages
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";

import AddProject from "../pages/admin/AddProject";
// Protected route (we create this next)
import ProtectedRoute from "./ProtectedRoute";

import AdminProjects 
from "../pages/admin/AdminProjects";
import EditProject from "../pages/admin/EditProject";
import Messages from "../pages/admin/Messages";
import AdminProfile from "../pages/admin/AdminProfile";

function AppRoutes() {


  return (


    <BrowserRouter>


      <Routes>


        {/* Public Portfolio */}
        <Route

          path="/"

          element={

            <MainLayout>

              <Home />

            </MainLayout>

          }

        />




        {/* Admin Login */}
        <Route

          path="/admin/login"

          element={<AdminLogin />}

        />





        {/* Protected Admin Area */}
        <Route


          path="/admin/dashboard"


          element={

            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>

          }


        />
<Route

path="/admin/projects"

element={

<ProtectedRoute>

<AdminProjects/>

</ProtectedRoute>

}

/>
<Route
path="/admin/projects/add"
element={
<ProtectedRoute>
<AddProject/>
</ProtectedRoute>
}
/>
<Route

path="/admin/projects/edit/:id"

element={

<ProtectedRoute>

<EditProject />

</ProtectedRoute>

}

/>
<Route

path="/admin/messages"

element={

<ProtectedRoute>

<Messages/>

</ProtectedRoute>

}

/>
<Route

path="/admin/profile"

element={

<ProtectedRoute>

<AdminProfile/>

</ProtectedRoute>

}

/>

      </Routes>


    </BrowserRouter>


  );


}


export default AppRoutes;