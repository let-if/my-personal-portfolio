
import { motion } from "framer-motion";

import ContactCard from "./contact/ContactCard";
import ContactForm from "./contact/ContactForm";

import { contactInfo } from "../../data/contact";


function Contact() {


  return (


    <section

      id="contact"

      className="
        relative
        py-24
        lg:py-32
      "

    >



      <div

        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "

      >





        {/* Header */}

        <motion.div


          initial={{
            opacity:0,
            y:30
          }}


          whileInView={{
            opacity:1,
            y:0
          }}


          viewport={{
            once:true
          }}


          className="
            mb-16
            text-center
          "


        >



          <p

            className="
              mb-4
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              uppercase
              tracking-widest
              text-cyan-400
            "

          >

            Contact

          </p>






          <h2

            className="
              text-4xl
              font-extrabold
              text-white
              sm:text-5xl
            "

          >

            Let's Build Something{" "}


            <span

              className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "

            >

              Amazing

            </span>



          </h2>







          <p

            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "

          >

            I'm always open to internships,
            full-time opportunities,
            freelance work, and collaborations
            on exciting software projects.

          </p>




        </motion.div>









        <div

          className="
            grid
            gap-10
            lg:grid-cols-2
          "

        >





          {/* LEFT */}

          <div>



            <div

              className="
                space-y-5
              "

            >

              {
                contactInfo.map((item)=>(


                  <ContactCard

                    key={item.id}

                    item={item}

                  />


                ))
              }


            </div>








            {/* Availability */}

            <motion.div


              initial={{
                opacity:0,
                y:20
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}



              className="
                mt-8
                rounded-3xl
                border
                border-cyan-400/20
                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                p-8
                backdrop-blur-xl
              "

            >



              <h3

                className="
                  text-2xl
                  font-bold
                  text-white
                "

              >

                Current Availability

              </h3>





              <div

                className="
                  mt-6
                  space-y-3
                "

              >


                <p className="text-slate-300">

                  ✅ Open for Software Engineering Internships

                </p>



                <p className="text-slate-300">

                  ✅ Available for Freelance Projects

                </p>




                <p className="text-slate-300">

                  ✅ Interested in Full-Stack Development Roles

                </p>



              </div>



            </motion.div>










            {/* Response Time */}

            <motion.div


              initial={{
                opacity:0
              }}


              whileInView={{
                opacity:1
              }}


              viewport={{
                once:true
              }}


              className="
                mt-6
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "


            >



              <h3

                className="
                  text-xl
                  font-bold
                  text-white
                "

              >

                Response Time

              </h3>



              <p

                className="
                  mt-3
                  text-slate-400
                "

              >

                I usually respond within 24 hours.
                Looking forward to discussing your project
                or opportunity.

              </p>



            </motion.div>



          </div>










          {/* RIGHT */}

          <ContactForm />





        </div>






      </div>




    </section>


  );

}


export default Contact;