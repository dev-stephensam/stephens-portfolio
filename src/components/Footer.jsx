import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer>
      <div className=" text-neutral-100 py-1 text-center">
        <p>&copy; 2025 All rights reserved. Stephen Samuel</p>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/stephen-samuel-095535216">
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.github.com/dev-stephensam">
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
      </div>
    </footer>
  );
};

export default Footer;
