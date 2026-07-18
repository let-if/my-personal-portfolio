import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

function ContactCard({ item }) {
  const icons = {
    email: <FaEnvelope />,
    phone: <FaPhoneAlt />,
    location: <FaMapMarkerAlt />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    resume: <FaFileDownload />,
  };

  const isExternal =
    item.link.startsWith("http");

  return (
    <motion.a
      href={item.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={{
        y: -8,
      }}
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition
        hover:border-cyan-400/40
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
          text-2xl
          text-cyan-400
          transition
          group-hover:scale-110
        "
      >
        {icons[item.icon]}
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-cyan-400">
          {item.title}
        </p>

        <h3 className="mt-1 break-all text-lg font-semibold text-white">
          {item.value}
        </h3>
      </div>
    </motion.a>
  );
}

export default ContactCard;