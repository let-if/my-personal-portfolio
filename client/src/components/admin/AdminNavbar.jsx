// import {
// FaBell
// }
// from "react-icons/fa";


// function AdminNavbar(){


// const admin =
// JSON.parse(
// localStorage.getItem("admin")
// );



// return(

// <header

// className="
// flex
// items-center
// justify-between
// border-b
// border-white/10
// bg-slate-950/80
// px-6
// py-5
// backdrop-blur-xl
// "

// >


// <div>

// <h1
// className="
// text-xl
// font-bold
// text-white
// "
// >

// Admin Dashboard

// </h1>


// <p
// className="
// text-sm
// text-slate-400
// "
// >

// Welcome back, {admin?.name}

// </p>


// </div>




// <FaBell

// className="
// text-xl
// text-cyan-400
// "

// />


// </header>


// );


// }


// export default AdminNavbar;
import { FaBell, FaCircle } from "react-icons/fa";

function AdminNavbar() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <header
      className="
        sticky
        top-0
        z-40
        overflow-hidden
        border-b
        border-cyan-500/10
        bg-slate-950/70
        backdrop-blur-2xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-20
          top-0
          h-40
          w-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-0
          top-0
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          flex
          items-center
          justify-between
          px-8
          py-5
        "
      >
        {/* Left */}
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-cyan-400
            "
          >
            Portfolio CMS
          </p>

          <h1
            className="
              mt-2
              text-3xl
              font-black
              text-white
            "
          >
            Admin Dashboard
          </h1>

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-slate-400
            "
          >
            <FaCircle
              className="
                text-[10px]
                text-green-400
                animate-pulse
              "
            />

            <span>
              Welcome back,
            </span>

            <span
              className="
                font-semibold
                text-cyan-300
              "
            >
              {admin?.name}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <button
            className="
              group
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-500/20
              bg-white/5
              text-cyan-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:border-cyan-400
              hover:bg-cyan-500/10
              hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
            "
          >
            <FaBell
              className="
                text-xl
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            {/* Notification Dot */}
            <span
              className="
                absolute
                right-3
                top-3
                flex
                h-3
                w-3
              "
            >
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-red-400
                  opacity-70
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-red-500
                "
              />
            </span>
          </button>

          {/* Admin Avatar */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              backdrop-blur-xl
              transition
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-indigo-600
                text-lg
                font-bold
                text-white
                shadow-lg
                shadow-cyan-500/40
              "
            >
              {admin?.name?.charAt(0).toUpperCase()}
            </div>

            <div className="hidden md:block">
              <h3
                className="
                  font-semibold
                  text-white
                "
              >
                {admin?.name}
              </h3>

              <p
                className="
                  text-sm
                  text-slate-400
                "
              >
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;