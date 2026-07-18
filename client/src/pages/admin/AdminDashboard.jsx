// import AdminLayout from "../../layouts/AdminLayout";


// function AdminDashboard(){


// return(

// <AdminLayout>


// <div

// className="
// grid
// gap-6
// md:grid-cols-3
// "


// >


// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// "

// >

// <h2
// className="
// text-4xl
// font-bold
// text-cyan-400
// "
// >

// 9

// </h2>

// <p
// className="
// text-slate-400
// "
// >

// Projects

// </p>


// </div>



// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// "

// >

// <h2
// className="
// text-4xl
// font-bold
// text-cyan-400
// "
// >

// 0

// </h2>

// <p
// className="
// text-slate-400
// "
// >

// Messages

// </p>


// </div>



// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// "

// >

// <h2
// className="
// text-4xl
// font-bold
// text-cyan-400
// "
// >

// 1

// </h2>

// <p
// className="
// text-slate-400
// "
// >

// Admin

// </p>


// </div>


// </div>


// </AdminLayout>


// );


// }


// export default AdminDashboard;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaFolderOpen,
  FaEnvelope,
  FaUserShield,
  FaEye,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getDashboardStats,
} from "../../services/dashboardService";

function AdminDashboard() {

  const [stats, setStats] = useState({

    totalProjects: 0,

    totalMessages: 0,

    unreadMessages: 0,

    totalVisitors: 0,

  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadDashboard();

  }, []);

  async function loadDashboard() {

    try {

      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  const cards = [

    {
      title: "Projects",
      value: stats.totalProjects,
      icon: <FaFolderOpen />,
      color: "from-cyan-500 to-blue-600",
    },

    {
      title: "Messages",
      value: stats.totalMessages,
      icon: <FaEnvelope />,
      color: "from-pink-500 to-red-500",
    },

    {
      title: "Unread",
      value: stats.unreadMessages,
      icon: <FaEnvelope />,
      color: "from-yellow-400 to-orange-500",
    },

    {
      title: "Visitors",
      value: stats.totalVisitors,
      icon: <FaEye />,
      color: "from-green-500 to-emerald-600",
    },

    {
      title: "Admin",
      value: 1,
      icon: <FaUserShield />,
      color: "from-purple-500 to-indigo-600",
    },

  ];

  return (

    <AdminLayout>

      <div className="space-y-12">

        <div>

          <h1 className="text-5xl font-black text-white">

            Admin Dashboard

          </h1>

          <p className="mt-3 text-slate-400 text-lg">

            Welcome back. Here's what's happening in your portfolio.

          </p>

        </div>

        {loading ? (

          <div className="text-slate-400 text-lg">

            Loading dashboard...

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {cards.map((card) => (

              <motion.div

                key={card.title}

                whileHover={{

                  y: -10,

                  scale: 1.03,

                }}

                transition={{

                  type: "spring",

                  stiffness: 250,

                }}

                className="

                  relative

                  overflow-hidden

                  rounded-3xl

                  border

                  border-white/10

                  bg-white/5

                  p-8

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

                  transition-all

                  duration-500

                "

              >

                <div

                  className={`

                    absolute

                    inset-0

                    opacity-0

                    hover:opacity-20

                    transition

                    bg-gradient-to-br

                    ${card.color}

                  `}

                />

                <div className="relative flex items-center justify-between">

                  <div>

                    <p className="text-slate-400 text-sm uppercase tracking-wider">

                      {card.title}

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">

                      {card.value}

                    </h2>

                  </div>

                  <div

                    className={`

                      flex

                      h-20

                      w-20

                      items-center

                      justify-center

                      rounded-3xl

                      bg-gradient-to-br

                      ${card.color}

                      text-3xl

                      text-white

                      shadow-xl

                    `}

                  >

                    {card.icon}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </AdminLayout>

  );

}

export default AdminDashboard;
// admin@portfolio.com

// Admin@123