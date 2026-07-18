
import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaArrowUp,
FaDownload,
FaEnvelope,
} from "react-icons/fa";


import {
useEffect,
useState
}
from "react";


import {
getPublicProfile
}
from "../../services/profileService";


import { CV_URL } from "../../constants/cv";


function FooterCTA() {

const [profile,setProfile]=useState(null);



useEffect(()=>{


loadProfile();


},[]);





async function loadProfile(){


try{


const data =
await getPublicProfile();


setProfile(data);


}
catch(error){

console.log(error);

}


}

  const scrollToTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };



  return (

    <footer

      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-gradient-to-b
        from-slate-950
        via-slate-950
        to-black
        py-28
      "

    >



      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="
          absolute
          left-1/2
          top-20
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "/>


        <div className="
          absolute
          bottom-10
          right-10
          h-56
          w-56
          rounded-full
          bg-blue-500/10
          blur-3xl
        "/>

      </div>





      <div className="relative mx-auto max-w-7xl px-6">



        {/* Floating particles */}

        <div className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        ">

          {[...Array(18)].map((_,index)=>(

            <motion.div

              key={index}

              className="
                absolute
                h-2
                w-2
                rounded-full
                bg-cyan-400/30
              "

              initial={{

                opacity:0.2,

                y:0

              }}

              animate={{

                y:[-20,20,-20],

                opacity:[0.2,0.7,0.2]

              }}

              transition={{

                duration:4+(index%4),

                repeat:Infinity,

                delay:index*0.3

              }}

              style={{

                left:`${(index*7)%100}%`,

                top:`${(index*11)%100}%`

              }}

            />

          ))}

        </div>







        {/* CTA */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="text-center"

        >


          <p className="
            mb-4
            text-sm
            uppercase
            tracking-[0.4em]
            text-cyan-400
          ">

            Let's Connect

          </p>




          <h2 className="
            text-5xl
            font-black
            text-white
            md:text-6xl
          ">

            Ready to Build Something


            <span className="
              block
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            ">

              Extraordinary?

            </span>


          </h2>




          <p className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
          ">

            Whether it's a software engineering internship,
            a freelance project, or an exciting opportunity
            to collaborate, I'd love to hear from you.

            Let's build software that makes a real impact.

          </p>






          <div className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-5
          ">



            <a

              href="#contact"

              className="
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-105
              "

            >

              <span className="
                flex
                items-center
                gap-3
              ">

                <FaEnvelope />

                Contact Me

              </span>


            </a>








            {/* CV */}

            <a

              href={CV_URL}

              download

              className="
                rounded-2xl
                border
                border-cyan-400/20
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                duration-300
                hover:border-cyan-400
              "

            >

              <span className="
                flex
                items-center
                gap-3
              ">


                <FaDownload />


                Download Resume


              </span>


            </a>




          </div>



        </motion.div>









        {/* Developer Signature */}

        <motion.div

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            delay:0.2
          }}

          viewport={{
            once:true
          }}

          className="
            mx-auto
            mt-24
            max-w-4xl
            text-center
          "

        >



          <blockquote className="
            text-2xl
            font-light
            italic
            leading-10
            text-slate-300
            md:text-3xl
          ">

            "I don't just write code—I build solutions that solve
            real-world problems, create meaningful user experiences,
            and continuously push me to become a better software engineer."

          </blockquote>




          <div className="mt-12">

            {/* <h3 className="
              text-3xl
              font-bold
              text-white
            ">

              Abdulletif Ylkal Abate

            </h3> */}
<h3  className="
              text-3xl
              font-bold
              text-white
            ">
{profile?.name || "Abdulletif Ylkal Abate"}
</h3>

            <p className="
              mt-3
              text-lg
              text-cyan-400
            ">

              {profile?.role || "Software Engineer"}

            </p>


          </div>





          <div className="
            mt-10
            flex
            justify-center
            gap-8
            text-3xl
          ">


            <a

              href="https://github.com/let-if"

              target="_blank"

              rel="noreferrer"

              className="
                text-slate-400
                transition
                hover:text-cyan-400
              "

            >

              <FaGithub />

            </a>





            <a

              href="https://www.linkedin.com/in/letif-ylkal-585463411"

              target="_blank"

              rel="noreferrer"

              className="
                text-slate-400
                transition
                hover:text-cyan-400
              "

            >

              <FaLinkedin />

            </a>



          </div>


        </motion.div>







        {/* Bottom */}

        <div className="
          mt-24
          flex
          flex-col
          items-center
          justify-between
          gap-6
          border-t
          border-white/10
          pt-8
          md:flex-row
        ">


          <p className="
            text-center
            text-sm
            text-slate-500
          ">

            © 2026 Abdulletif Ylkal Abate.
            Built with React, Node.js,
            PostgreSQL, and passion for software engineering.

          </p>





          <button

            onClick={scrollToTop}

            className="
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              p-4
              text-white
              transition
              duration-300
              hover:scale-110
            "

          >

            <FaArrowUp />

          </button>



        </div>



      </div>



    </footer>


  );

}


export default FooterCTA;