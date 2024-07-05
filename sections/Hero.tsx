"use client";

import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center"
      >
        <p className="text-xl font-bold">Bonjour ! Je suis</p>
        <h1>Antoine Dangleterre</h1>
        <p className="text-xl font-bold">
          Développeur front-end situé dans le nord (Valenciennes, Cambrai,
          Lille)
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-col sm:flex-row mt-12 items-center gap-9"
      >
        <a href="mailto:bonjour@antoinedangleterre.com">
          <Button color={"primary"} text={"Prenez contact avec moi"} />
        </a>
        <a
          href="https://drive.google.com/file/d/1tjdjfRHZ6Q07skRe19hsihYCxvw4dIuU/view?usp=sharing"
          target="_blank"
        >
          <Button
            color={"secondary"}
            text={"Téléchargez mon CV"}
            className={"grow"}
          />
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
