import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function ExperienceCard({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-4
          top-10
          h-5
          w-5
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,0.8)]
          md:left-1/2
          md:-translate-x-1/2
          z-10
        "
      />

      <div
        className={`
          w-full
          md:w-[45%]
          ml-12
          md:ml-0
          ${
            isLeft
              ? "md:mr-auto md:pr-12"
              : "md:ml-auto md:pl-12"
          }
        `}
      >
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            transition
            duration-300
            hover:border-cyan-400/40
            hover:-translate-y-2
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              bg-cyan-500/10
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-cyan-400
            "
          >
            {experience.type}
          </span>

          {/* Role */}
          <h3 className="mt-5 text-2xl font-bold text-white">
            {experience.role}
          </h3>

          {/* Company */}
          <p className="mt-2 text-lg text-slate-300">
            {experience.company}
          </p>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{experience.period}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 leading-7 text-slate-400">
            {experience.description}
          </p>
           <div className="mt-6">
  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
    Key Achievements
  </h4>

  <ul className="space-y-3">
    {experience.achievements.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 text-slate-300"
      >
        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
  className="
    mt-8
    border-t
    border-white/10
    pt-5
    flex
    items-center
    justify-between
  "
>
  <span className="text-sm text-slate-500">
    {experience.type}
  </span>

  <span className="text-sm font-medium text-cyan-400">
    {experience.period}
  </span>
</div>
    </motion.div>
  );
}

export default ExperienceCard;