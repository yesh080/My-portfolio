

'use client';

import { motion } from 'framer-motion';


const languages = [
  { name: 'Java', percentage: 85 },
  { name: 'Python', percentage: 90 },
  { name: 'SQL', percentage: 80 },
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Shell Scripting', percentage: 75 },
];
const tools = [
  { name: 'Git', percentage: 85 },
  { name: 'GitHub', percentage: 90 },
  { name: 'VS Code', percentage: 95 },
  { name: 'IntelliJ IDEA', percentage: 80 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          

          {/* Bio and Education */}
          <motion.div 
            className="md:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Education & Strengths</h3>
            <p className="text-lg mb-2">B.Tech in Computer Science from Mohan Babu University (GPA: 8.69/10.0)</p>
            <p className="text-lg mb-6">Narayana JR College, MPC (79.9%)</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Problem-Solving</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Teamwork</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Communication</span>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="md:col-span-3 bg-gray-800 bg-opacity-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-center">Languages</h4>
                {languages.map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 bg-opacity-50 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-center">Tools</h4>
                {tools.map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 bg-opacity-50 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
