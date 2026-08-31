
// import { useState } from "react";

// import {
//   sendMessage
// } from "../../../services/contactService";



// function ContactForm() {



// const [formData,setFormData]=useState({

// name:"",

// email:"",

// subject:"",

// message:""

// });



// const [loading,setLoading]=useState(false);


// const [status,setStatus]=useState("");





// function handleChange(e){


// setFormData({

// ...formData,

// [e.target.name]:e.target.value

// });


// }








// async function handleSubmit(e){


// e.preventDefault();



// try{


// setLoading(true);

// setStatus("");



// await sendMessage(formData);



// setStatus(
// "Message sent successfully 🚀"
// );



// setFormData({

// name:"",

// email:"",

// subject:"",

// message:""

// });



// }catch(error){


// console.error(error);


// setStatus(
// "Failed to send message"
// );



// }
// finally{


// setLoading(false);


// }



// }









// return (



// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// "

// >



// <h3

// className="
// mb-8
// text-2xl
// font-bold
// text-white
// "

// >

// Send Me a Message

// </h3>







// <form

// onSubmit={handleSubmit}

// className="
// space-y-6
// "

// >







// <input


// name="name"


// value={formData.name}


// onChange={handleChange}


// type="text"


// placeholder="Your Name"


// required


// className="
// w-full
// rounded-xl
// border
// border-white/10
// bg-slate-900/60
// px-5
// py-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// "

// />









// <input


// name="email"


// value={formData.email}


// onChange={handleChange}


// type="email"


// placeholder="Your Email"


// required


// className="
// w-full
// rounded-xl
// border
// border-white/10
// bg-slate-900/60
// px-5
// py-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// "

// />









// <input


// name="subject"


// value={formData.subject}


// onChange={handleChange}


// type="text"


// placeholder="Subject"


// required


// className="
// w-full
// rounded-xl
// border
// border-white/10
// bg-slate-900/60
// px-5
// py-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// "

// />









// <textarea


// name="message"


// value={formData.message}


// onChange={handleChange}


// rows="6"


// placeholder="Write your message..."


// required


// className="
// w-full
// rounded-xl
// border
// border-white/10
// bg-slate-900/60
// px-5
// py-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// "

// />









// <button


// disabled={loading}


// type="submit"


// className="
// w-full
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// py-4
// font-semibold
// text-white
// transition
// hover:scale-[1.02]
// disabled:opacity-50
// "

// >


// {

// loading

// ?

// "Sending..."

// :

// "Send Message"

// }


// </button>








// {

// status && (


// <p

// className="
// mt-4
// text-center
// text-cyan-400
// "

// >

// {status}

// </p>


// )

// }



// </form>





// </div>



// );


// }



// export default ContactForm;
import React, { useState } from "react";
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { sendMessage } from "../../../services/contactService";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus({ message: "", type: "" });

      await sendMessage(formData);

      setStatus({
        message: "DISPATCH_SUCCESSFUL // Transmission received.",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        message: "DISPATCH_ERROR // Connection failed. Please retry.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl border border-cyan-500/25
        bg-[#080f1e]/85 p-8 shadow-[0_0_35px_rgba(0,240,255,0.07)]
        backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(0,240,255,0.15)] md:p-10
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

      {/* 2. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 3. FORM HEADER & TELEMETRY */}
      <div className="relative mb-8 border-b border-cyan-500/15 pb-4">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
          <span>DIRECT_TRANSMISSION_PORTAL</span>
        </div>

        <h3 className="font-['Orbitron'] text-2xl font-black tracking-wide text-white sm:text-3xl">
          Send Me a{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
            Message
          </span>
        </h3>
      </div>

      {/* 4. HUD INPUT FIELDS */}
      <form onSubmit={handleSubmit} className="relative space-y-5">
        <div>
          <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
            // OPERATOR_NAME
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Full Name"
            required
            className="
              w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5
              font-['JetBrains_Mono'] text-sm text-white placeholder-slate-500
              outline-none transition-all duration-300
              focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
            // COMMS_ADDRESS
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email Address"
            required
            className="
              w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5
              font-['JetBrains_Mono'] text-sm text-white placeholder-slate-500
              outline-none transition-all duration-300
              focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
            // SUBJECT_HEADER
          </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Project Inquiry / Opportunity"
            required
            className="
              w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5
              font-['JetBrains_Mono'] text-sm text-white placeholder-slate-500
              outline-none transition-all duration-300
              focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
            // PAYLOAD_CONTENT
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your transmission details here..."
            required
            className="
              w-full resize-none rounded-xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5
              font-['JetBrains_Mono'] text-sm text-white placeholder-slate-500
              outline-none transition-all duration-300
              focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
            "
          />
        </div>

        {/* 5. TACTICAL DISPATCH CTA */}
        <button
          disabled={loading}
          type="submit"
          className="
            group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden
            rounded-xl border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
            py-4 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
            shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300
            hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] active:scale-98
            disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer
          "
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

          {loading ? (
            <>
              <FaSpinner className="animate-spin text-sm" />
              <span>TRANSMITTING...</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="text-xs" />
              <span>INITIATE DISPATCH</span>
            </>
          )}
        </button>

        {/* 6. STATUS LOG OUTPUT */}
        {status.message && (
          <div
            className={`
              mt-4 flex items-center justify-center gap-2 rounded-xl border p-3 font-['JetBrains_Mono'] text-xs font-semibold
              ${
                status.type === "success"
                  ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "border-red-500/40 bg-red-950/40 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              }
            `}
          >
            {status.type === "success" ? (
              <FaCheckCircle className="text-emerald-400" />
            ) : (
              <FaExclamationTriangle className="text-red-400" />
            )}
            <span>{status.message}</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;