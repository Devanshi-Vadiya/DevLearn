import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap, BookmarkCheck, TrendingUp,
  Clock, Star, ArrowRight, Flame
} from 'lucide-react';
import { courses } from '../../data/courses';
import { blogs } from '../../data/blogs';

const statsCards = [
  { label: 'Enrolled Courses', value: '4', icon: <GraduationCap size={20} />, gradient: 'from-violet-600/20 to-violet-800/5', border: 'border-violet-500/20', color: 'text-violet-400' },
  { label: 'Saved Blogs', value: '12', icon: <BookmarkCheck size={20} />, gradient: 'from-pink-600/20 to-pink-800/5', border: 'border-pink-500/20', color: 'text-pink-400' },
  { label: 'Hours Learned', value: '38', icon: <Clock size={20} />, gradient: 'from-blue-600/20 to-blue-800/5', border: 'border-blue-500/20', color: 'text-blue-400' },
  { label: 'Day Streak', value: '7', icon: <Flame size={20} />, gradient: 'from-orange-600/20 to-orange-800/5', border: 'border-orange-500/20', color: 'text-orange-400' },
];

export default function DashboardOverview() {
  const user = JSON.parse(localStorage.getItem('devlearn_user') || '{}');
  const recentCourses = courses.slice(0, 3);
  const savedBlogs = blogs.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Dashboard – DevLearn</title>
      </Helmet>

      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white font-['Outfit'] mb-1">
          Welcome back, <span className="gradient-text">{user.name || 'Developer'}</span> 👋
        </h1>
        <p className="text-slate-400">Here's what's happening with your learning journey.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statsCards.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-2xl p-5 bg-gradient-to-br ${s.gradient} border ${s.border} backdrop-blur-sm`}
          >
            <div className={`${s.color} mb-3`}>{s.icon}</div>
            <div className="text-3xl font-black text-white mb-1">{s.value}</div>
            <div className="text-slate-400 text-xs font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Continue Learning */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-white font-['Outfit']">Continue Learning</h2>
          <Link to="/dashboard/my-courses" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-3">
          {recentCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.06 }}
              className="glass rounded-xl p-4 flex items-center gap-4 group hover:border-violet-500/30 border border-transparent transition-all"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-semibold truncate group-hover:text-violet-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">{course.instructor}</p>
                {/* Progress bar */}
                <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden w-full max-w-xs">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: `${[65, 30, 10][i]}%` }}
                  />
                </div>
                <p className="text-slate-500 text-xs mt-1">{[65, 30, 10][i]}% complete</p>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="text-violet-400 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg glass border border-violet-500/20 flex-shrink-0 transition-colors"
              >
                Resume
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Saved Blogs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-white font-['Outfit']">Saved Blogs</h2>
          <Link to="/dashboard/saved-blogs" className="text-sm text-pink-400 hover:text-pink-300 flex items-center gap-1">
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {savedBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="h-28 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3">
                <h3 className="text-white text-sm font-medium line-clamp-2 group-hover:text-violet-300 transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Clock size={10} />
                    {blog.readTime}
                  </span>
                  <Link to={`/blogs/${blog.id}`} className="text-violet-400 hover:text-violet-300 text-xs font-medium">
                    Read →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
