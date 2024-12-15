import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import T from "../images/T.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-gray-900 text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <motion.img
            src={T}
            className="rounded-full"
            width={50}
            height={43}
            alt="logo"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-6 text-2xl">
        {[
          {
            href: "https://www.linkedin.com/in/your-linkedin-profile",
            icon: <FaLinkedin />,
            label: "LinkedIn",
          },
          {
            href: "https://www.github.com/your-github-profile",
            icon: <FaGithub />,
            label: "Github",
          },
          {
            href: "https://www.instagram.com/your-instagram-profile",
            icon: <FaInstagram />,
            label: "Instagram",
          },
          {
            href: "https://www.telegram.me/your-telegram-profile",
            icon: <FaTelegram />,
            label: "Telegram",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2, color: "#38bdf8" }} // Smooth hover effect
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
