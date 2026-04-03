import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, Star, Play, ArrowRight } from 'lucide-react';
import { courses } from '../../data/courses';

// Simulate enrolled courses with progress
const enrolledCourses = courses.map((c, i) => ({
  ...c,
  progress: [65, 30, 10, 80, 45, 20][i % 6],
  lastAccessed: ['2 hours ago', '1 day ago', '3 days ago', 'Just now', '5 days ago', '1 week ago'][i % 6],
}));

export default function MyCourses() {
  return (
    <>
      <Helmet>
        <title>My Courses – DevLearn Dashboard</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white font-['Outfit'] mb-1">My Courses</h1>
        <p className="text-slate-400">Track your progress across all enrolled courses.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {enrolledCourses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              {/* Progress overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>{course.progress}% complete</span>
                  <span className="text-slate-400">{course.lastAccessed}</span>
                </div>
                <div className="h-1.5 bg-slate-700/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.3 }}
                    className="h-full gradient-bg rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-violet-300 transition-colors line-clamp-2">
                {course.title}
              </h3>
              <p className="text-slate-500 text-xs mb-3">{course.instructor}</p>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1 text-yellow-400">
                  <Star size={11} className="fill-yellow-400" />
                  {course.rating}
                </span>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="flex items-center justify-center gap-2 w-full btn-primary text-sm py-2"
              >
                <Play size={13} className="fill-white" />
                {course.progress > 0 ? 'Continue' : 'Start'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
