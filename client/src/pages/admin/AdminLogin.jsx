
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import {
//   FaEnvelope,
//   FaLock,
//   FaShieldAlt,
// } from "react-icons/fa";

// import { adminLogin } from "../../services/adminService";

// function AdminLogin() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       setError("");

//       const data = await adminLogin(form);

//       localStorage.setItem(
//         "adminToken",
//         data.token
//       );

//       localStorage.setItem(
//         "admin",
//         JSON.stringify(data.admin)
//       );

//       navigate("/admin/dashboard");
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div
//       className="
//       relative
//       flex
//       min-h-screen
//       items-center
//       justify-center
//       overflow-hidden
//       bg-slate-950
//     "
//     >
//       {/* Background */}

//       <div className="absolute inset-0">

//         <div
//           className="
//           absolute
//           -left-32
//           top-10
//           h-96
//           w-96
//           rounded-full
//           bg-cyan-500/20
//           blur-[140px]
//         "
//         />

//         <div
//           className="
//           absolute
//           right-0
//           bottom-0
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-blue-600/20
//           blur-[180px]
//         "
//         />

//         <div
//           className="
//           absolute
//           left-1/2
//           top-1/2
//           h-80
//           w-80
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-indigo-500/10
//           blur-[140px]
//         "
//         />
//       </div>

//       {/* Card */}

//       <motion.form
//         initial={{
//           opacity: 0,
//           y: 40,
//           scale: 0.95,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//           scale: 1,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//         onSubmit={handleSubmit}
//         className="
//         relative
//         z-10
//         w-full
//         max-w-md
//         rounded-[32px]
//         border
//         border-white/10
//         bg-white/5
//         p-10
//         shadow-2xl
//         shadow-cyan-500/10
//         backdrop-blur-2xl
//       "
//       >
//         {/* Logo */}

//         <div className="mb-8 flex justify-center">

//           <div
//             className="
//             flex
//             h-20
//             w-20
//             items-center
//             justify-center
//             rounded-full
//             bg-gradient-to-r
//             from-cyan-500
//             to-blue-600
//             shadow-lg
//             shadow-cyan-500/40
//           "
//           >
//             <FaShieldAlt
//               className="text-3xl text-white"
//             />
//           </div>

//         </div>

//         <h1
//           className="
//           text-center
//           text-4xl
//           font-black
//           text-white
//         "
//         >
//           Portfolio CMS
//         </h1>

//         <p
//           className="
//           mt-3
//           mb-10
//           text-center
//           text-slate-400
//         "
//         >
//           Secure administrator login
//         </p>

//         {/* Email */}

//         <div className="relative mb-6">

//           <FaEnvelope
//             className="
//             absolute
//             left-5
//             top-1/2
//             -translate-y-1/2
//             text-cyan-400
//           "
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 email: e.target.value,
//               })
//             }
//             className="
//             w-full
//             rounded-2xl
//             border
//             border-white/10
//             bg-slate-900/60
//             py-4
//             pl-14
//             pr-5
//             text-white
//             outline-none
//             transition
//             duration-300
//             focus:border-cyan-400
//             focus:ring-4
//             focus:ring-cyan-500/20
//           "
//           />

//         </div>

//         {/* Password */}

//         <div className="relative mb-8">

//           <FaLock
//             className="
//             absolute
//             left-5
//             top-1/2
//             -translate-y-1/2
//             text-cyan-400
//           "
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             value={form.password}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 password: e.target.value,
//               })
//             }
//             className="
//             w-full
//             rounded-2xl
//             border
//             border-white/10
//             bg-slate-900/60
//             py-4
//             pl-14
//             pr-5
//             text-white
//             outline-none
//             transition
//             duration-300
//             focus:border-cyan-400
//             focus:ring-4
//             focus:ring-cyan-500/20
//           "
//           />

//         </div>

//         <button
//           disabled={loading}
//           className="
//           w-full
//           rounded-2xl
//           bg-gradient-to-r
//           from-cyan-500
//           via-sky-500
//           to-blue-600
//           py-4
//           text-lg
//           font-bold
//           text-white
//           shadow-xl
//           shadow-cyan-500/30
//           transition-all
//           duration-300
//           hover:scale-[1.02]
//           hover:shadow-cyan-500/50
//           disabled:opacity-50
//         "
//         >
//           {loading ? "Signing In..." : "Login"}
//         </button>

//         {error && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             className="
//             mt-6
//             rounded-xl
//             border
//             border-red-500/30
//             bg-red-500/10
//             p-4
//             text-center
//             text-red-400
//           "
//           >
//             {error}
//           </motion.div>
//         )}

//         <div
//           className="
//           mt-10
//           border-t
//           border-white/10
//           pt-6
//           text-center
//           text-sm
//           text-slate-500
//         "
//         >
//           Portfolio CMS • Admin Access Only
//         </div>

//       </motion.form>
//     </div>
//   );
// }

// export default AdminLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSpinner } from "react-icons/fa";
import { adminLogin } from "../../services/adminService";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await adminLogin(form);

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-8 selection:bg-cyan-500 selection:text-white">
      {/* 1. BRAND AMBIENT ATMOSPHERIC GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

      {/* 2. SUBTLE MATRIX GRID */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* 3. OUTER HOUSING CONTAINER */}
      <div className="relative z-10 flex w-full max-w-[940px] items-center justify-center rounded-[44px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl sm:p-10 md:p-14">
        {/* 4. DUAL-PANE SPLIT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            relative grid w-full max-w-[760px] grid-cols-1 overflow-hidden rounded-[28px]
            border border-cyan-400/40 bg-[#060e1a]
            shadow-[0_0_40px_rgba(6,182,212,0.25)]
            md:grid-cols-2
          "
        >
          {/* DIAGONAL SPLIT WING WITH SUBTLE MESH & TEXTURE */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(44% 0, 100% 0, 100% 100%, 76% 100%)",
            }}
          >
            {/* Deep Glass Texture Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-slate-900/95 to-blue-950/90" />
            
            {/* Glowing Mesh Flare */}
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />

            {/* Micro Pattern Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40" />

            {/* Accent Highlight Edge Line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-sky-300 to-transparent shadow-[0_0_12px_#00f0ff]" />
          </div>

          {/* LEFT PANE: Login Form */}
          <div className="relative z-10 flex flex-col justify-center px-8 py-10 sm:px-10">
            <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-white">
              Login
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div className="relative border-b border-white/20 pb-2.5 transition-colors focus-within:border-cyan-400">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-400 outline-none"
                  />
                  <FaUser className="text-xs text-cyan-400" />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative border-b border-white/20 pb-2.5 transition-colors focus-within:border-cyan-400">
                <div className="flex items-center justify-between">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                    className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-400 outline-none"
                  />
                  <FaLock className="text-xs text-cyan-400" />
                </div>
              </div>

              {/* Error Output */}
              {error && (
                <p className="text-center text-xs font-semibold text-red-400">
                  {error}
                </p>
              )}

              {/* Textured Glass Pill Button */}
              <button
                disabled={loading}
                type="submit"
                className="
                  group/btn relative flex w-full items-center justify-center overflow-hidden
                  rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-950/90 via-slate-900 to-blue-950/90
                  py-3 text-sm font-bold tracking-wide text-cyan-300
                  shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]
                  backdrop-blur-xl transition-all duration-300
                  hover:scale-[1.02] hover:border-cyan-300 hover:text-white hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]
                  active:scale-95 disabled:opacity-50 cursor-pointer
                "
              >
                {/* Glowing Sheen Animation on Hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                
                {loading ? (
                  <FaSpinner className="animate-spin text-sm" />
                ) : (
                  "Login"
                )}
              </button>

              {/* Footer Link */}
              <div className="text-center text-xs text-slate-400">
                <span>Don't have an account? </span>
                <button
                  type="button"
                  onClick={() =>
                    setError("Registration is restricted to authorized administrators.")
                  }
                  className="font-bold text-cyan-400 hover:underline cursor-pointer"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT PANE: Welcome Banner */}
          <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 text-center sm:px-10">
            <h1 className="text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-4xl">
              Welcome
              <span className="block text-2xl font-black uppercase tracking-wider text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] sm:text-3xl">
                Back!
              </span>
            </h1>

            <p className="mt-4 max-w-[220px] text-xs font-medium leading-relaxed text-slate-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              We're happy to have you with us back again! If you need anything,
              we're here to help.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminLogin;