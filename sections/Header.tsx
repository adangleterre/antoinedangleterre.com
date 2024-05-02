"use client";

import ThemeToggle from '../components/ThemeToggle';
import AlertDot from '../components/AlertDot';
import BrandLogo from '@/components/BrandLogo';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='flex items-center mt-[50px]'
    >
      <div className='items-center hidden gap-4 md:flex md:w-3/12'><AlertDot />Disponible</div>
      <div className='flex w-9/12 md:w-8/12 md:justify-center '>
        <BrandLogo />
      </div>
      <div className='flex justify-end w-3/12'>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

export default Header;