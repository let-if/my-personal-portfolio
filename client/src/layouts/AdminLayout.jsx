import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";


function AdminLayout({children}) {


return (

<div
className="
min-h-screen
bg-slate-950
text-white
flex
"
>


<AdminSidebar />


<div
className="
flex-1
"
>


<AdminNavbar />


<main
className="
p-6
lg:p-10
"
>

{children}

</main>


</div>


</div>

);


}


export default AdminLayout;