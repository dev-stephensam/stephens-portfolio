import React from "react";
import logo from "../assets/stephenslogoLight.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Stephen Samuels Logo" className="mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/stephen-samuel-095535216">
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.github.com/dev-dusu">
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://instagram.com/papacrocs?igshid=ZGUzMzM3NWJiOQ==">
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://twitter.com/PapaCrocs?t=3HsYvnhjdhRWXtzZoZuD-g&s=09">
          <FaXTwitter />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
