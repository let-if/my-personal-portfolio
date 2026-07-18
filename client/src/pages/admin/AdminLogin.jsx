// import {
// useState
// }
// from "react";


// import {
// adminLogin
// }
// from "../../services/adminService";


// import {
// useNavigate
// }
// from "react-router-dom";



// function AdminLogin(){



// const navigate =
// useNavigate();



// const [form,setForm]=useState({

// email:"",
// password:""

// });



// const [error,setError]=useState("");





// async function handleSubmit(e){

// e.preventDefault();


// try{


// const data =
// await adminLogin(form);



// localStorage.setItem(
// "adminToken",
// data.token
// );



// localStorage.setItem(
// "admin",
// JSON.stringify(data.admin)
// );



// navigate("/admin/dashboard");


// }
// catch(error){

// setError(
// "Invalid credentials"
// );

// }



// }





// return(

// <div className="
// min-h-screen
// flex
// items-center
// justify-center
// bg-slate-950
// ">


// <form

// onSubmit={handleSubmit}

// className="
// w-full
// max-w-md
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// "


// >


// <h1 className="
// mb-8
// text-3xl
// font-bold
// text-white
// ">

// Admin Login

// </h1>



// <input

// type="email"

// placeholder="Email"

// className="
// mb-4
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// onChange={(e)=>

// setForm({

// ...form,

// email:e.target.value

// })

// }

// />



// <input

// type="password"

// placeholder="Password"

// className="
// mb-6
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// onChange={(e)=>

// setForm({

// ...form,

// password:e.target.value

// })

// }

// />



// <button

// className="
// w-full
// rounded-xl
// bg-cyan-500
// py-4
// font-bold
// text-white
// "

// >

// Login

// </button>



// {
// error &&
// <p className="mt-4 text-red-400">

// {error}

// </p>
// }



// </form>


// </div>


// );


// }


// export default AdminLogin;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

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

      localStorage.setItem(
        "adminToken",
        data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(data.admin)
      );

      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-slate-950
    "
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          -left-32
          top-10
          h-96
          w-96
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
        />

        <div
          className="
          absolute
          right-0
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "
        />

        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
        />
      </div>

      {/* Card */}

      <motion.form
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        onSubmit={handleSubmit}
        className="
        relative
        z-10
        w-full
        max-w-md
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-10
        shadow-2xl
        shadow-cyan-500/10
        backdrop-blur-2xl
      "
      >
        {/* Logo */}

        <div className="mb-8 flex justify-center">

          <div
            className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            shadow-lg
            shadow-cyan-500/40
          "
          >
            <FaShieldAlt
              className="text-3xl text-white"
            />
          </div>

        </div>

        <h1
          className="
          text-center
          text-4xl
          font-black
          text-white
        "
        >
          Portfolio CMS
        </h1>

        <p
          className="
          mt-3
          mb-10
          text-center
          text-slate-400
        "
        >
          Secure administrator login
        </p>

        {/* Email */}

        <div className="relative mb-6">

          <FaEnvelope
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-cyan-400
          "
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            py-4
            pl-14
            pr-5
            text-white
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/20
          "
          />

        </div>

        {/* Password */}

        <div className="relative mb-8">

          <FaLock
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-cyan-400
          "
          />

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
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            py-4
            pl-14
            pr-5
            text-white
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/20
          "
          />

        </div>

        <button
          disabled={loading}
          className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          via-sky-500
          to-blue-600
          py-4
          text-lg
          font-bold
          text-white
          shadow-xl
          shadow-cyan-500/30
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-cyan-500/50
          disabled:opacity-50
        "
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        {error && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            mt-6
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-4
            text-center
            text-red-400
          "
          >
            {error}
          </motion.div>
        )}

        <div
          className="
          mt-10
          border-t
          border-white/10
          pt-6
          text-center
          text-sm
          text-slate-500
        "
        >
          Portfolio CMS • Admin Access Only
        </div>

      </motion.form>
    </div>
  );
}

export default AdminLogin;