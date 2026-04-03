import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { instructors } from '../data/instructors';
import InstructorCard from '../components/InstructorCard';

export default function Instructors() {
  return (
    <>
      <Helmet>
        <title>Instructors – DevLearn | Expert Developers & Educators</title>
        <meta
          name="description"
          content="Meet our world-class instructors — experienced developers and educators teaching React, JS, DSA, AI, and more."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 text-sm text-violet-300 mb-4">
            <Users size={14} />
            {instructors.length} Expert Instructors
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] mb-4">
            Meet the <span className="gradient-text">Instructors</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Learn from industry professionals at Google, Meta, Vercel, and more — 
            passionate about sharing their expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.map((instructor, i) => (
            <InstructorCard key={instructor.id} instructor={instructor} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
