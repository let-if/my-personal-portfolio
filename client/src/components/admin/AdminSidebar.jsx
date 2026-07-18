// import {
// Link,
// useNavigate
// }
// from "react-router-dom";


// import {
// FaHome,
// FaProjectDiagram,
// FaEnvelope,
// FaFilePdf,
// FaUser,
// FaSignOutAlt
// }
// from "react-icons/fa";



// function AdminSidebar(){


// const navigate = useNavigate();



// function logout(){


// localStorage.removeItem(
// "adminToken"
// );


// localStorage.removeItem(
// "admin"
// );


// navigate("/admin/login");


// }



// const links=[


// {
// name:"Dashboard",
// path:"/admin/dashboard",
// icon:<FaHome/>
// },


// {
// name:"Projects",
// path:"/admin/projects",
// icon:<FaProjectDiagram/>
// },


// {
// name:"Messages",
// path:"/admin/messages",
// icon:<FaEnvelope/>
// },


// {
// name:"Resume",
// path:"/admin/resume",
// icon:<FaFilePdf/>
// },


// {
// name:"Profile",
// path:"/admin/profile",
// icon:<FaUser/>
// }


// ];



// return (

// <aside

// className="
// hidden
// w-72
// border-r
// border-white/10
// bg-white/5
// p-6
// backdrop-blur-xl
// lg:block
// "

// >


// <h2

// className="
// mb-10
// text-2xl
// font-bold
// text-cyan-400
// "

// >

// Portfolio CMS

// </h2>




// <nav

// className="
// space-y-3
// "

// >


// {

// links.map((item)=>(


// <Link

// key={item.name}

// to={item.path}

// className="
// flex
// items-center
// gap-4
// rounded-xl
// px-4
// py-3
// text-slate-300
// transition
// hover:bg-cyan-500/10
// hover:text-cyan-400
// "

// >

// {item.icon}

// {item.name}


// </Link>


// ))


// }



// <button

// onClick={logout}

// className="
// mt-10
// flex
// w-full
// items-center
// gap-4
// rounded-xl
// px-4
// py-3
// text-red-400
// transition
// hover:bg-red-500/10
// "

// >

// <FaSignOutAlt/>

// Logout

// </button>



// </nav>


// </aside>

// );


// }


// export default AdminSidebar;
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaFilePdf,
  FaUser,
  FaSignOutAlt,
  FaCode,
} from "react-icons/fa";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login");
  }

  const links = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <FaEnvelope />,
    },
    {
      name: "Resume",
      path: "/admin/resume",
      icon: <FaFilePdf />,
    },
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside
      className="
      hidden
      lg:flex
      w-80
      flex-col
      justify-between
      border-r
      border-cyan-400/10
      bg-gradient-to-b
      from-slate-950/95
      via-slate-900/95
      to-black/95
      backdrop-blur-3xl
      shadow-[0_0_60px_rgba(6,182,212,0.08)]
      overflow-hidden
    "
    >
      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 p-8">
        {/* Logo */}
        <div className="mb-14 flex items-center gap-4">
          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            text-2xl
            text-white
            shadow-lg
            shadow-cyan-500/40
            transition
            duration-500
            hover:rotate-6
            hover:scale-110
          "
          >
            <FaCode />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Portfolio
            </h2>

            <p className="text-sm text-cyan-400">
              Admin CMS
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {links.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400 hover:translate-x-2"
                  }
                `}
              >
                {!active && (
                  <span
                    className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    origin-center
                    scale-y-0
                    rounded-r-full
                    bg-cyan-400
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                  "
                  />
                )}

                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="font-semibold tracking-wide">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10 p-8">
        <div
          className="
          mb-6
          rounded-2xl
          border
          border-cyan-400/20
          bg-cyan-500/5
          p-5
        "
        >
          <h3 className="text-lg font-bold text-white">
            Portfolio CMS
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Manage projects, messages, resume,
            and your public portfolio from one
            modern dashboard.
          </p>
        </div>

        <button
          onClick={logout}
          className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          px-5
          py-4
          font-semibold
          text-red-400
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:border-red-400
          hover:bg-red-500
          hover:text-white
          hover:shadow-lg
          hover:shadow-red-500/30
        "
        >
          <FaSignOutAlt className="transition group-hover:rotate-12" />

          Logout
        </button>

        <p className="mt-8 text-center text-xs text-slate-500">
          Portfolio CMS • v1.0
        </p>
      </div>
    </aside>
  );
}

export default AdminSidebar;