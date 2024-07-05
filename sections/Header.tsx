"use client";

import ThemeToggle from "../components/ThemeToggle";
import AlertDot from "../components/AlertDot";
import BrandLogo from "@/components/BrandLogo";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-[50px] flex items-center"
    >
      <div className="hidden cursor-default items-center gap-4 md:flex md:w-3/12">
        <AlertDot />
        Disponible
      </div>
      <div className="flex w-9/12 md:w-8/12 md:justify-center">
        <BrandLogo />
      </div>
      <div className="flex w-3/12 justify-end">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

export default Header;
