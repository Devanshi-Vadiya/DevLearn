import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, MessageCircle, Briefcase, BookOpen, GraduationCap, Star } from 'lucide-react';

export default function InstructorCard({ instructor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-6 card-hover group text-center"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-violet-500/30 group-hover:border-violet-400/60 transition-colors bg-slate-700">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#0F172A]">
            <Star size={10} className="text-white fill-white" />
          </div>
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-0.5 group-hover:text-violet-300 transition-colors">
        {instructor.name}
      </h3>
      <p className="text-violet-400 text-sm font-medium mb-3">{instructor.expertise}</p>

      <div className="flex items-center justify-center gap-4 text-slate-400 text-xs mb-4">
        <span className="flex items-center gap-1">
          <GraduationCap size={12} />
          {instructor.coursesCount} courses
        </span>
        <span className="flex items-center gap-1">
          <BookOpen size={12} />
          {instructor.blogsCount} blogs
        </span>
      </div>

      <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.round(instructor.rating) ? 'fill-yellow-400' : 'text-slate-600'}
          />
        ))}
        <span className="text-slate-400 ml-1 text-xs">{instructor.rating}</span>
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {[Code, MessageCircle, Briefcase].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>

      <Link
        to={`/instructors/${instructor.id}`}
        className="block w-full btn-outline text-sm py-2"
      >
        View Profile
      </Link>
    </motion.div>
  );
}
