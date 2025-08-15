'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Image from 'next/image';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">I am available for freelance work or full-time positions. Contact me and let&apos;s build something amazing together.</p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:yeshyeswanth8@gmail.com" className="flex items-center"><Image src="/images/icons8-email-50.png" alt="Email" width={24} height={24} className="mr-2" /></a>
              <a href="https://linkedin.com/in/yeswanthgoli" target="_blank" rel="noopener noreferrer" className="flex items-center"><Image src="/images/icons8-linked-in-50.png" alt="LinkedIn" width={24} height={24} className="mr-2" /></a>
              <a href="https://github.com/yesh080" target="_blank" rel="noopener noreferrer" className="flex items-center"><Image src="/images/icons8-github-50.png" alt="GitHub" width={24} height={24} className="mr-2" /></a>
            </div>
          </div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" {...register('name', { required: true })} className="w-full p-2 rounded bg-gray-700 bg-opacity-50 border border-gray-600" />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" {...register('email', { required: true })} className="w-full p-2 rounded bg-gray-700 bg-opacity-50 border border-gray-600" />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" {...register('message', { required: true })} className="w-full p-2 rounded bg-gray-700 bg-opacity-50 border border-gray-600" rows={4}></textarea>
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;