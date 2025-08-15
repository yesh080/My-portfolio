'use client';

import { motion } from 'framer-motion';

const certifications = [
  { name: 'Python Essentials', issuer: 'CISCO' },
  { name: 'Python Fullstack', issuer: 'EduSkills' },
  { name: 'ServiceNow Certified System Administrator', issuer: 'CSA' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 bg-opacity-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;