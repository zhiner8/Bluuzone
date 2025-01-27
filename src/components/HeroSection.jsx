import { motion } from "framer-motion";
import biking from "../assets/biking.jpg";
import React from "react";
import Subscribe from "./Subscribe";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-10 min-h-[601px]">
      <div className="absolute inset-x-0 top-0 h-full -z-10">
        <img
          src={biking}
          alt="biking"
          className="w-full h-full object-cover"
        ></img>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <h1 className="text-5xl flex justify-center font-breathdemo tracking-wide">
        Bluuzone
      </h1>
      <motion.div
        className="container mx-auto px-4 py-3 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className="text-5xl text-center sm:text-left justify-center sm:text-8xl font-breathdemo flex mt-20 sm:w-1/2">
          Hydration Without Harm.
        </h1>
      </motion.div>
      <motion.div
        className="container mx-auto px-4 py-3 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-xl text-center sm:text-left justify-center font-oxygenlight flex sm:w-1/3">
          Join us on our mission in pioneering the first 100% plastic free,
          disposable water bottle
        </p>
      </motion.div>

      <motion.div
        className="flex w-full mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <Subscribe />
      </motion.div>
    </div>
  );
};

export default HeroSection;
