


'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import projects from '../../../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <Link href={project.liveUrl} className="text-blue-400 hover:underline">View Live</Link>
                  <Link href={project.codeUrl} className="text-blue-400 hover:underline">View Code</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
