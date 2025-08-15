'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Engineering Intern',
    date: 'July - Oct 2024',
    description: 'Built scalable data lakes on cloud storage; optimized queries and tuned performance.',
  },
  {
    role: 'Cloud Foundation Intern',
    date: 'July - Oct 2024',
    description: 'Gained a strong understanding of IaaS, PaaS, and SaaS models. Worked with various cloud services for compute, storage, databases, and serverless functions.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-5/12"></div>
              <div className="z-10 bg-blue-500 rounded-full w-8 h-8"></div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;