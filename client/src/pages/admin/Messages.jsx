
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// motion
// }
// from "framer-motion";


// import {
// FaEnvelope,
// FaTrash,
// FaCheckCircle,
// FaUser,
// FaClock
// }
// from "react-icons/fa";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getMessages,

// deleteMessage,

// markRead

// }

// from "../../services/adminMessageService";







// function Messages(){



// const [messages,setMessages]=useState([]);


// const [loading,setLoading]=useState(true);







// useEffect(()=>{

// loadMessages();

// },[]);









// async function loadMessages(){


// try{


// const data =
// await getMessages();


// setMessages(data || []);



// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }



// }









// async function remove(id){



// const confirm =
// window.confirm(
// "Delete this message permanently?"
// );



// if(!confirm)
// return;



// try{


// await deleteMessage(id);


// loadMessages();


// }

// catch(error){

// console.log(error);

// }



// }









// async function read(id){



// try{


// await markRead(id);


// loadMessages();


// }

// catch(error){

// console.log(error);

// }


// }










// return(


// <AdminLayout>


// <div

// className="
// relative
// "

// >





// {/* Header */}


// <motion.div

// initial={{

// opacity:0,
// y:-30

// }}

// animate={{

// opacity:1,
// y:0

// }}

// className="
// mb-10
// flex
// items-center
// justify-between
// "

// >


// <div>


// <h1

// className="
// text-4xl
// font-black
// text-white
// "

// >

// Messages Center

// </h1>


// <p

// className="
// mt-2
// text-slate-400
// "

// >

// Manage visitor messages and communication

// </p>


// </div>





// <div

// className="
// rounded-2xl
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-3
// text-cyan-300
// "

// >


// <FaEnvelope

// className="
// inline
// mr-2
// "

// />


// {messages.length} Messages


// </div>



// </motion.div>









// {

// loading ?



// <div

// className="
// flex
// justify-center
// py-20
// "

// >

// <div

// className="
// h-12
// w-12
// animate-spin
// rounded-full
// border-4
// border-cyan-400
// border-t-transparent
// "

// />


// </div>





// :



// messages.length===0 ?



// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-12
// text-center
// "

// >


// <FaEnvelope

// size={50}

// className="
// mx-auto
// mb-5
// text-slate-500
// "

// />


// <h2

// className="
// text-2xl
// font-bold
// text-white
// "

// >

// No Messages Yet

// </h2>


// <p

// className="
// mt-3
// text-slate-400
// "

// >

// Your portfolio messages will appear here.

// </p>


// </div>






// :





// <div

// className="
// grid
// gap-7
// "

// >





// {

// messages.map((msg,index)=>(



// <motion.div


// key={msg.id}


// initial={{

// opacity:0,

// y:40

// }}


// animate={{

// opacity:1,

// y:0

// }}


// transition={{

// delay:index*0.08

// }}



// whileHover={{

// y:-8,

// scale:1.01

// }}



// className="
// group
// relative
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-7
// shadow-xl
// backdrop-blur-xl
// transition
// "

// >



// {/* Glow */}


// <div

// className="
// absolute
// right-0
// top-0
// h-32
// w-32
// rounded-full
// bg-cyan-500/20
// blur-3xl
// opacity-0
// transition
// group-hover:opacity-100
// "

// />









// <div

// className="
// relative
// flex
// items-start
// justify-between
// "

// >


// <div

// className="
// flex
// items-center
// gap-4
// "

// >


// <div

// className="
// rounded-2xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// p-4
// text-white
// "

// >


// <FaUser size={22}/>


// </div>





// <div>


// <h2

// className="
// text-xl
// font-bold
// text-white
// "

// >

// {msg.name}

// </h2>


// <p

// className="
// text-sm
// text-slate-400
// "

// >

// {msg.email}

// </p>


// </div>



// </div>










// {

// msg.status==="NEW" &&


// <span

// className="
// animate-pulse
// rounded-full
// bg-cyan-400/20
// px-4
// py-2
// text-sm
// font-bold
// text-cyan-300
// "

// >

// NEW

// </span>


// }




// </div>









// <h3

// className="
// relative
// mt-7
// text-xl
// font-bold
// text-white
// "

// >


// {msg.subject}


// </h3>









// <p

// className="
// relative
// mt-4
// leading-relaxed
// text-slate-300
// "

// >

// {msg.message}

// </p>









// <div

// className="
// relative
// mt-6
// flex
// items-center
// gap-2
// text-sm
// text-slate-500
// "

// >

// <FaClock/>

// {new Date(msg.createdAt).toLocaleDateString()}

// </div>









// <div

// className="
// relative
// mt-7
// flex
// gap-4
// "

// >





// <button


// onClick={()=>read(msg.id)}


// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-5
// py-3
// font-bold
// text-white
// transition
// hover:scale-105
// "

// >


// <FaCheckCircle/>


// Mark Read


// </button>









// <button


// onClick={()=>remove(msg.id)}


// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-red-500/20
// px-5
// py-3
// font-bold
// text-red-400
// transition
// hover:scale-105
// hover:bg-red-500
// hover:text-white
// "

// >


// <FaTrash/>


// Delete


// </button>






// </div>









// </motion.div>



// ))



// }





// </div>





// }





// </div>



// </AdminLayout>



// );


// }



// export default Messages;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaTrashAlt,
  FaCheckCircle,
  FaUser,
  FaClock,
  FaTerminal,
  FaSignal,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import {
  getMessages,
  deleteMessage,
  markRead,
} from "../../services/adminMessageService";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    try {
      const data = await getMessages();
      setMessages(data || []);
    } catch (error) {
      console.error("Inbound message loading failure:", error);
    } finally {
      setLoading(false);
    }
  }

  async function remove(id) {
    const confirmDelete = window.confirm("Purge transmission record permanently?");
    if (!confirmDelete) return;

    try {
      await deleteMessage(id);
      loadMessages();
    } catch (error) {
      console.error("Message deletion error:", error);
    }
  }

  async function read(id) {
    try {
      await markRead(id);
      loadMessages();
    } catch (error) {
      console.error("Message status update error:", error);
    }
  }

  const unreadCount = messages.filter((m) => m.status === "NEW" || !m.read).length;

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. TELEMETRY COMM CONSOLE HEADER */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                SYS_COMMS // INBOUND_TRANSMISSIONS
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Message{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Center
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Review visitor transmissions, client proposals, and system inquiries.
            </p>
          </div>

          {/* Telemetry Status Pod */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-[#080f1e]/80 px-4 py-2.5 font-['JetBrains_Mono'] text-xs text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.08)] backdrop-blur-xl">
              <FaEnvelope className="text-cyan-400" />
              <span>TOTAL: {messages.length}</span>
            </div>

            {unreadCount > 0 && (
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-950/40 px-3 py-2.5 font-mono text-xs font-bold text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{unreadCount} NEW</span>
              </div>
            )}
          </div>
        </div>

        {/* 2. LOADING STATE */}
        {loading && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <div className="flex flex-col items-center justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
              <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
                DECRYPTING_INBOUND_FEED...
              </p>
            </div>
          </div>
        )}

        {/* 3. EMPTY STATE */}
        {!loading && messages.length === 0 && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <FaEnvelopeOpen className="mx-auto mb-4 text-4xl text-cyan-400/40" />
            <h2 className="font-['Orbitron'] text-lg font-bold text-white">
              No Messages Logged
            </h2>
            <p className="mt-1 font-['JetBrains_Mono'] text-xs text-slate-400">
              Transmission queue empty. Inbound inquiries will register here.
            </p>
          </div>
        )}

        {/* 4. MESSAGES FEED STREAM */}
        {!loading && messages.length > 0 && (
          <div className="grid gap-6">
            {messages.map((msg, index) => {
              const isNew = msg.status === "NEW" || !msg.read;

              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    group relative overflow-hidden rounded-3xl border bg-[#080f1e]/85 p-7
                    shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl transition-all duration-300
                    hover:bg-[#0c162c]
                    ${
                      isNew
                        ? "border-cyan-400/60 shadow-[0_0_35px_rgba(0,240,255,0.15)]"
                        : "border-cyan-500/20 hover:border-cyan-400/40"
                    }
                  `}
                >
                  {/* Tactical HUD Corner Marks */}
                  <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                  <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                  <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

                  {/* Header Row: Sender Identity & Status Pill */}
                  <div className="relative flex flex-wrap items-start justify-between gap-4 border-b border-cyan-500/15 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                        <FaUser size={15} />
                      </div>

                      <div>
                        <h2 className="font-['Orbitron'] text-base font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200">
                          {msg.name}
                        </h2>
                        <a
                          href={`mailto:${msg.email}`}
                          className="font-['JetBrains_Mono'] text-xs text-cyan-400/80 hover:text-cyan-300 hover:underline"
                        >
                          {msg.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {isNew ? (
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-3 py-1 font-mono text-[9px] font-bold text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.3)] animate-pulse">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>NEW_TRANSMISSION</span>
                        </div>
                      ) : (
                        <span className="font-mono text-[9px] font-medium uppercase tracking-wider text-slate-400">
                          STATUS: READ
                        </span>
                      )}

                      <div className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs text-slate-400">
                        <FaClock size={11} className="text-cyan-400/70" />
                        <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message Subject & Body */}
                  <div className="mt-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400/60">
                        // SUBJECT:
                      </span>
                      <h3 className="font-['Orbitron'] text-sm font-bold tracking-wide text-white">
                        {msg.subject || "No Subject Specified"}
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/10 bg-slate-950/60 p-4">
                      <p className="font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
                        {msg.message}
                      </p>
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-cyan-500/15 pt-4">
                    {isNew && (
                      <button
                        onClick={() => read(msg.id)}
                        className="
                          inline-flex items-center gap-2 rounded-xl border border-cyan-500/30
                          bg-cyan-950/40 px-4 py-2 font-['Orbitron'] text-[10px] font-bold
                          uppercase tracking-wider text-cyan-300 transition-all duration-200
                          hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white
                          hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] active:scale-95 cursor-pointer
                        "
                      >
                        <FaCheckCircle size={11} />
                        <span>Mark as Read</span>
                      </button>
                    )}

                    <button
                      onClick={() => remove(msg.id)}
                      className="
                        inline-flex items-center gap-2 rounded-xl border border-red-500/30
                        bg-red-950/20 px-4 py-2 font-['Orbitron'] text-[10px] font-bold
                        uppercase tracking-wider text-red-300 transition-all duration-200
                        hover:border-red-400 hover:bg-red-900/40 hover:text-white
                        hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] active:scale-95 cursor-pointer
                      "
                    >
                      <FaTrashAlt size={10} />
                      <span>Delete</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Messages;