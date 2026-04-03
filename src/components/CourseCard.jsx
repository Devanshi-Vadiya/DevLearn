import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BarChart2, Star, ArrowRight } from 'lucide-react';

const levelColors = {
  'Beginner': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Intermediate': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'Advanced': 'bg-red-500/15 text-red-400 border-red-500/30',
  'Beginner to Advanced': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
};

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        {/* Level badge */}
        <div className="absolute top-3 right-3">
          <span className={`category-pill border text-[11px] ${levelColors[course.level] || 'bg-slate-600/30 text-slate-400 border-slate-500/30'}`}>
            <BarChart2 size={10} />
            {course.level}
          </span>
        </div>
        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {course.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor row */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={course.instructorAvatar}
            alt={course.instructor}
            className="w-6 h-6 rounded-full bg-slate-700"
          />
          <span className="text-xs text-slate-400">{course.instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1 text-yellow-400">
            <Star size={12} className="fill-yellow-400" />
            {course.rating}
          </span>
        </div>

        <Link
          to={`/courses/${course.id}`}
          className="flex items-center justify-center gap-2 w-full btn-primary text-sm py-2.5"
        >
          Enroll Now
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
