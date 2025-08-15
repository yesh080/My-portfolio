'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-transparent text-white"
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Goli Yeswanth
        </motion.h1>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            ServiceNow Certified System Administrator (CSA)
          </span>
        </motion.div>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Cloud & Data Engineering Enthusiast | Full-Stack Developer | ServiceNow Specialist
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;