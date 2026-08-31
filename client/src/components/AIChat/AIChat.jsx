
// import {
// useState,
// useEffect,
// useRef
// }
// from "react";


// import {
// motion,
// AnimatePresence
// }
// from "framer-motion";


// import {
// FaRobot,
// FaTimes,
// FaPaperPlane,
// FaUser,
// FaTrash,
// FaCircle
// }
// from "react-icons/fa";


// import {
// askAI
// }
// from "../../services/aiService";




// function AIChat(){



// const [open,setOpen]=useState(false);


// const [message,setMessage]=useState("");



// const [loading,setLoading]=useState(false);



// const [messages,setMessages]=useState(()=>{


// const saved =
// localStorage.getItem(
// "ai-chat-history"
// );


// return saved
// ?
// JSON.parse(saved)
// :
// [

// {

// id:1,

// sender:"ai",

// text:
// "Hi 👋 I'm Abdulletif AI. Ask me about projects, skills, experience, or software engineering.",

// time:
// new Date().toLocaleTimeString([],{
// hour:"2-digit",
// minute:"2-digit"
// })

// }

// ];


// });





// const chatEndRef =
// useRef(null);





// // SAVE CHAT HISTORY

// useEffect(()=>{


// localStorage.setItem(

// "ai-chat-history",

// JSON.stringify(messages)

// );


// },[messages]);






// // AUTO SCROLL

// useEffect(()=>{


// chatEndRef.current?.scrollIntoView({

// behavior:"smooth"

// });


// },[messages,loading]);









// function clearChat(){


// setMessages([

// {

// id:Date.now(),

// sender:"ai",

// text:
// "Chat cleared. How can I help you?",

// time:
// new Date().toLocaleTimeString([],{
// hour:"2-digit",
// minute:"2-digit"
// })

// }

// ]);


// }











// async function sendMessage(){



// if(!message.trim() || loading)
// return;




// const userText =
// message;




// setMessages(prev=>[

// ...prev,

// {

// id:Date.now(),

// sender:"user",

// text:userText,

// time:
// new Date().toLocaleTimeString([],{
// hour:"2-digit",
// minute:"2-digit"
// })

// }

// ]);




// setMessage("");



// setLoading(true);





// try{


// const data =
// await askAI(userText);





// setMessages(prev=>[

// ...prev,

// {

// id:Date.now(),

// sender:"ai",

// text:

// data.answer ||

// data.reply ||

// data.message ||

// "No response received",

// time:
// new Date().toLocaleTimeString([],{
// hour:"2-digit",
// minute:"2-digit"
// })

// }

// ]);



// }

// catch(error){


// console.log(error);



// setMessages(prev=>[

// ...prev,

// {

// id:Date.now(),

// sender:"ai",

// text:
// "Sorry, I cannot connect right now.",

// time:
// new Date().toLocaleTimeString([],{
// hour:"2-digit",
// minute:"2-digit"
// })

// }

// ]);


// }

// finally{


// setLoading(false);


// }


// }









// return(


// <>



// {/* =========================
// PREMIUM FLOATING AI BUTTON
// ========================= */}



// <motion.button



// onClick={()=>setOpen(!open)}




// whileHover={{

// scale:1.12

// }}



// whileTap={{

// scale:.9

// }}



// animate={{

// boxShadow:[

// "0 0 25px rgba(34,211,238,.5)",

// "0 0 60px rgba(59,130,246,.9)",

// "0 0 25px rgba(34,211,238,.5)"

// ]

// }}



// transition={{

// duration:2,

// repeat:Infinity

// }}



// className="
// fixed
// bottom-6
// right-6
// z-[99999]
// flex
// h-20
// w-20
// items-center
// justify-center
// rounded-full
// bg-gradient-to-br
// from-cyan-400
// via-blue-500
// to-purple-600
// text-3xl
// text-white
// shadow-2xl
// "

// >



// {/* rotating glow */}


// <span

// className="
// absolute
// inset-0
// animate-ping
// rounded-full
// bg-cyan-400/30
// "

// />





// <div

// className="
// relative
// "

// >


// {

// open

// ?

// <FaTimes/>

// :

// <FaRobot/>

// }


// </div>



// </motion.button>







// <AnimatePresence>


// {

// open &&


// <motion.div
// id="premium-part-2"
// initial={{

// opacity:0,

// y:50,

// scale:.85

// }}


// animate={{

// opacity:1,

// y:0,

// scale:1

// }}



// exit={{

// opacity:0,

// y:50,

// scale:.85

// }}



// transition={{

// duration:.35,

// ease:"easeOut"

// }}



// className="
// fixed
// bottom-28
// right-6
// z-[99998]
// flex
// h-[650px]
// w-[420px]
// max-w-[calc(100vw-2rem)]
// flex-col
// overflow-hidden
// rounded-[32px]
// border
// border-white/20
// bg-slate-950/80
// shadow-[0_0_80px_rgba(34,211,238,.35)]
// backdrop-blur-3xl
// "

// >




// {/* =========================
// BACKGROUND EFFECTS
// ========================= */}



// <div

// className="
// pointer-events-none
// absolute
// inset-0
// overflow-hidden
// "

// >


// <div

// className="
// absolute
// -left-20
// -top-20
// h-60
// w-60
// rounded-full
// bg-cyan-500/20
// blur-3xl
// "

// />



// <div

// className="
// absolute
// -bottom-20
// -right-20
// h-60
// w-60
// rounded-full
// bg-purple-500/20
// blur-3xl
// "

// />


// </div>










// {/* =========================
// HEADER
// ========================= */}



// <div

// className="
// relative
// flex
// items-center
// justify-between
// border-b
// border-white/10
// bg-white/5
// p-5
// "

// >




// <div

// className="
// flex
// items-center
// gap-4
// "

// >


// <motion.div


// animate={{

// rotate:[0,10,-10,0]

// }}


// transition={{

// duration:4,

// repeat:Infinity

// }}


// className="
// relative
// flex
// h-14
// w-14
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-cyan-400
// to-blue-600
// text-2xl
// text-white
// shadow-[0_0_40px_rgba(34,211,238,.7)]
// "

// >


// <FaRobot/>





// <div

// className="
// absolute
// -bottom-1
// -right-1
// flex
// h-5
// w-5
// items-center
// justify-center
// rounded-full
// border-2
// border-slate-950
// bg-green-400
// "

// >


// <FaCircle

// className="
// text-[8px]
// text-green-900
// "

// />


// </div>



// </motion.div>







// <div>


// <h2

// className="
// text-xl
// font-black
// tracking-wide
// text-white
// "

// >

// Abdulletif AI

// </h2>



// <div

// className="
// mt-1
// flex
// items-center
// gap-2
// "

// >


// <span

// className="
// text-xs
// text-cyan-300
// "

// >

// Online Assistant

// </span>



// <span

// className="
// h-2
// w-2
// animate-pulse
// rounded-full
// bg-green-400
// "

// />



// </div>



// </div>



// </div>









// <button


// onClick={clearChat}


// className="
// rounded-xl
// border
// border-white/10
// bg-white/5
// p-3
// text-slate-300
// transition
// hover:border-red-400/40
// hover:bg-red-500/20
// hover:text-red-400
// "

// >


// <FaTrash/>

// </button>







// </div>
// // =========================
// // CHAT MESSAGES AREA
// // =========================



// <div

// className="
// relative
// flex-1
// space-y-5
// overflow-y-auto
// p-5
// scrollbar-thin
// "

// >




// {

// messages.map((msg)=>(



// <motion.div



// key={msg.id}



// initial={{

// opacity:0,

// y:20,

// scale:.95

// }}



// animate={{

// opacity:1,

// y:0,

// scale:1

// }}



// transition={{

// duration:.25

// }}



// className={

// msg.sender==="user"

// ?

// "flex justify-end"

// :

// "flex justify-start"

// }



// >



// <div

// className="
// flex
// max-w-[85%]
// items-end
// gap-3
// "

// >






// {/* AI AVATAR */}



// {

// msg.sender==="ai" &&



// <motion.div


// whileHover={{

// scale:1.1

// }}



// className="
// flex
// h-10
// w-10
// shrink-0
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-cyan-400
// to-blue-600
// text-white
// shadow-lg
// shadow-cyan-400/30
// "


// >


// <FaRobot/>


// </motion.div>


// }









// {/* MESSAGE BUBBLE */}



// <div


// className={

// msg.sender==="user"

// ?

// `

// rounded-3xl
// rounded-br-md
// bg-gradient-to-r
// from-cyan-500
// via-blue-600
// to-purple-600
// px-5
// py-4
// text-sm
// leading-relaxed
// text-white
// shadow-xl
// shadow-blue-500/20
// `

// :

// `

// rounded-3xl
// rounded-bl-md
// border
// border-white/10
// bg-white/10
// px-5
// py-4
// text-sm
// leading-relaxed
// text-slate-100
// shadow-xl
// backdrop-blur-xl
// `

// }



// >



// <p>

// {msg.text}

// </p>




// <div

// className={

// msg.sender==="user"

// ?

// "text-right text-[10px] text-white/70 mt-2"

// :

// "text-left text-[10px] text-cyan-300 mt-2"

// }

// >

// {msg.time}

// </div>




// </div>









// {/* USER AVATAR */}



// {

// msg.sender==="user" &&



// <div


// className="
// flex
// h-10
// w-10
// shrink-0
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-purple-500
// to-pink-500
// text-white
// shadow-lg
// "


// >


// <FaUser/>


// </div>


// }





// </div>





// </motion.div>



// ))


// }










// {/* =========================
// AI THINKING ANIMATION
// ========================= */}



// {

// loading &&



// <motion.div


// initial={{

// opacity:0

// }}


// animate={{

// opacity:1

// }}


// className="
// flex
// items-center
// gap-3
// "

// >


// <div

// className="
// flex
// h-10
// w-10
// items-center
// justify-center
// rounded-2xl
// bg-cyan-400/20
// text-cyan-300
// "

// >


// <FaRobot/>

// </div>





// <div

// className="
// flex
// items-center
// gap-1
// rounded-3xl
// border
// border-white/10
// bg-white/10
// px-5
// py-4
// "

// >


// <span

// className="
// h-2
// w-2
// animate-bounce
// rounded-full
// bg-cyan-400
// "

// />


// <span

// className="
// h-2
// w-2
// animate-bounce
// rounded-full
// bg-cyan-400
// [animation-delay:150ms]
// "

// />


// <span

// className="
// h-2
// w-2
// animate-bounce
// rounded-full
// bg-cyan-400
// [animation-delay:300ms]
// "

// />


// </div>



// </motion.div>



// }







// <div ref={chatEndRef}/>



// </div>



// <div

// className="
// relative
// flex
// gap-2
// overflow-x-auto
// px-5
// pb-3
// "

// >


// {

// [

// "What projects has he built?",

// "What technologies does he use?",

// "Tell me about his experience",

// "How can I contact him?"

// ]


// .map((item)=>(


// <motion.button



// key={item}



// whileHover={{

// scale:1.05

// }}



// onClick={()=>setMessage(item)}



// className="
// whitespace-nowrap
// rounded-full
// border
// border-cyan-400/30
// bg-cyan-400/10
// px-4
// py-2
// text-xs
// text-cyan-300
// backdrop-blur
// transition
// hover:bg-cyan-400/20
// "

// >


// {item}


// </motion.button>



// ))


// }


// </div>









// {/* =========================
// INPUT AREA
// ========================= */}



// <div

// className="
// relative
// flex
// items-center
// gap-3
// border-t
// border-white/10
// bg-black/20
// p-4
// "

// >



// <input



// value={message}



// onChange={(e)=>
// setMessage(e.target.value)
// }



// onKeyDown={(e)=>{


// if(e.key==="Enter")

// sendMessage();


// }}



// placeholder="
// Ask Abdulletif AI...
// "



// className="
// h-12
// flex-1
// rounded-2xl
// border
// border-white/10
// bg-white/10
// px-5
// text-sm
// text-white
// placeholder:text-slate-400
// outline-none
// transition
// focus:border-cyan-400
// focus:bg-white/20
// focus:ring-4
// focus:ring-cyan-400/20
// "



// />








// <motion.button



// onClick={sendMessage}



// whileHover={{

// scale:1.08

// }}



// whileTap={{

// scale:.9

// }}



// className="
// flex
// h-12
// w-12
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-cyan-400
// via-blue-500
// to-purple-600
// text-white
// shadow-lg
// shadow-cyan-500/40
// "



// >


// <FaPaperPlane/>


// </motion.button>






// </div>







// </motion.div>


// }


// </AnimatePresence>






// </>



// )


// }





// export default AIChat;
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaPaperPlane,
  FaTrashAlt,
  FaTerminal,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { askAI } from "../../services/aiService";

function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("ai-chat-history");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            sender: "ai",
            text: "SYSTEM INITIALIZED // Cyber-Core AI online. Query telemetry on projects, engineering stack, architecture, or background.",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ];
  });

  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("ai-chat-history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function clearChat() {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "TELEMETRY LOGS CLEARED // Ready for new command payload.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }

  async function handleSend(customText) {
    const queryPayload = (customText || message).trim();
    if (!queryPayload || loading) return;

    const userEntry = {
      id: Date.now(),
      sender: "user",
      text: queryPayload,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userEntry]);
    setMessage("");
    setLoading(true);

    try {
      const data = await askAI(queryPayload);
      const aiReply =
        data.answer ||
        data.reply ||
        data.message ||
        "TRANSMISSION_ERROR // Empty payload response.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "ai",
          text: aiReply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "ai",
          text: "ERR_NETWORK_DISPATCH // Unable to establish quantum neural bridge. Verify backend connection.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const promptShortcuts = [
    "What core projects has he deployed?",
    "Break down his technical tech stack",
    "Describe his engineering experience",
    "How can I initiate direct contact?",
  ];

  return (
    <>
      {/* 1. TACTICAL HUD FLOATING LAUNCH TRIGGER */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          group fixed bottom-6 right-6 z-[99999] flex h-16 w-16 items-center justify-center
          rounded-2xl border border-cyan-400/60 bg-[#080f1e]/90
          shadow-[0_0_30px_rgba(0,240,255,0.35)] backdrop-blur-2xl transition-all duration-300
          hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] cursor-pointer
        "
        aria-label="Toggle Cyber AI Assistant"
      >
        {/* Tactical Corner Brackets */}
        <span className="pointer-events-none absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-cyan-300" />
        <span className="pointer-events-none absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-cyan-300" />
        <span className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-cyan-300" />
        <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-cyan-300" />

        {/* Ambient Ring Beacon */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-cyan-400/20 duration-1000" />

        <div className="relative text-cyan-300 transition-colors group-hover:text-white">
          {open ? <FaTimes size={20} /> : <HiOutlineSparkles size={26} />}
        </div>
      </motion.button>

      {/* 2. HUD NEURAL MODAL INTERFACE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="
              fixed bottom-24 right-6 z-[99998] flex h-[620px] w-[420px] max-w-[calc(100vw-2rem)]
              flex-col overflow-hidden rounded-3xl border border-cyan-500/30
              bg-[#080f1e]/95 shadow-[0_0_60px_rgba(0,240,255,0.2)] backdrop-blur-3xl
              selection:bg-cyan-500 selection:text-black
            "
          >
            {/* Tactical HUD Framing Brackets */}
            <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/90 z-20" />
            <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/90 z-20" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/90 z-20" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/90 z-20" />

            {/* Atmosphere Glows */}
            <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

            {/* 3. TERMINAL HEADER */}
            <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 bg-slate-950/60 px-5 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                  <FaTerminal size={14} />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-['Orbitron'] text-xs font-bold tracking-wider text-white">
                    <span>CYBER_AI // CORE</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70">
                    STATUS: LINK_ACTIVE
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  title="Purge Telemetry Logs"
                  className="
                    flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800
                    bg-slate-950/80 text-slate-400 transition-all duration-200
                    hover:border-red-400/50 hover:bg-red-950/40 hover:text-red-300
                    active:scale-95 cursor-pointer
                  "
                >
                  <FaTrashAlt size={11} />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800
                    bg-slate-950/80 text-slate-400 transition-all duration-200
                    hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300
                    active:scale-95 cursor-pointer
                  "
                >
                  <FaTimes size={13} />
                </button>
              </div>
            </div>

            {/* 4. CHAT TELEMETRY LOG BUFFER */}
            <div className="relative z-10 flex-1 space-y-4 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        relative max-w-[85%] rounded-2xl p-4 transition-all
                        ${
                          isUser
                            ? "border border-cyan-400/50 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md"
                            : "border border-cyan-500/20 bg-slate-950/80 text-slate-200 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-md"
                        }
                      `}
                    >
                      <div className="mb-1.5 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-cyan-400/60">
                        <span>{isUser ? "// USER_EXEC" : "// SYS_RESPONSE"}</span>
                        <span>{msg.time}</span>
                      </div>

                      <p className="font-['JetBrains_Mono'] text-xs leading-relaxed">
                        {msg.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* LIVE COMPUTING PULSE */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-slate-950/80 px-4 py-3 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400 animate-pulse">
                      PROCESSING_NEURAL_PAYLOAD
                    </span>
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* 5. SUGGESTED QUERY CHIPS */}
            <div className="relative z-10 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-none">
              {promptShortcuts.map((shortcut, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(shortcut)}
                  className="
                    flex shrink-0 items-center gap-1.5 rounded-lg border border-cyan-500/25
                    bg-cyan-950/30 px-3 py-1.5 font-['JetBrains_Mono'] text-[10px] font-medium
                    text-cyan-300 backdrop-blur-md transition-all duration-200
                    hover:border-cyan-400 hover:bg-cyan-900/40 hover:text-white active:scale-95 cursor-pointer
                  "
                >
                  <FaChevronRight size={7} className="text-cyan-400" />
                  <span>{shortcut}</span>
                </button>
              ))}
            </div>

            {/* 6. TELEMETRY INPUT TRANSMITTER */}
            <div className="relative z-10 border-t border-cyan-500/20 bg-slate-950/80 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Enter telemetry query..."
                  className="
                    h-11 flex-1 rounded-xl border border-cyan-500/25 bg-[#080f1e] px-4
                    font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]
                  "
                />

                <button
                  onClick={() => handleSend()}
                  disabled={loading || !message.trim()}
                  className="
                    group/btn relative flex h-11 w-11 items-center justify-center overflow-hidden
                    rounded-xl border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                    text-white shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300
                    hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] active:scale-95
                    disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <FaPaperPlane size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AIChat;