import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Clock, Users, Star, BarChart2,
  CheckCircle2, BookOpen, ChevronDown, Play
} from 'lucide-react';
import { courses } from '../data/courses';
import { instructors } from '../data/instructors';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Course Not Found</h1>
        <Link to="/courses" className="btn-primary">← Back to Courses</Link>
      </div>
    );
  }

  const instructor = instructors.find((inst) => inst.id === course.instructorId);

  return (
    <>
      <Helmet>
        <title>{course.title} – DevLearn</title>
        <meta name="description" content={course.description} />
        <meta property="og:title" content={course.title} />
        <meta property="og:image" content={course.thumbnail} />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 max-w-7xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] leading-tight max-w-3xl">
            {course.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-5 flex flex-wrap gap-6"
            >
              <span className="flex items-center gap-2 text-slate-300 text-sm">
                <BarChart2 size={16} className="text-violet-400" />
                {course.level}
              </span>
              <span className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock size={16} className="text-pink-400" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2 text-slate-300 text-sm">
                <Users size={16} className="text-blue-400" />
                {course.students.toLocaleString()} students
              </span>
              <span className="flex items-center gap-2 text-yellow-400 text-sm">
                <Star size={16} className="fill-yellow-400" />
                {course.rating} rating
              </span>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-3">About this course</h2>
              <p className="text-slate-400 leading-relaxed">{course.longDescription}</p>
            </motion.div>

            {/* Syllabus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-5">Course Syllabus</h2>
              <div className="space-y-3">
                {course.syllabus.map((week, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 text-xs font-bold flex-shrink-0">
                      {week.week}
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-200 text-sm font-medium">{week.topic}</span>
                      <span className="text-slate-500 text-xs ml-2">• {week.lessons} lessons</span>
                    </div>
                    <Play size={14} className="text-slate-600 group-hover:text-violet-400 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-5">Student Reviews</h2>
              <div className="space-y-4">
                {course.reviews.map((review, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-8 h-8 rounded-full bg-slate-700"
                      />
                      <div>
                        <span className="text-white text-sm font-medium">{review.name}</span>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} size={10} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Enroll card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass rounded-2xl p-6 sticky top-24"
            >
              <div className="text-center mb-5">
                <span className="text-3xl font-black text-white">{course.price}</span>
                {course.price === 'Free' && (
                  <p className="text-emerald-400 text-sm mt-1">No credit card required</p>
                )}
              </div>
              <button className="btn-primary w-full text-base py-3 mb-3 flex items-center justify-center gap-2">
                <Play size={16} className="fill-white" />
                Start Learning
              </button>
              <button className="btn-outline w-full text-sm py-2.5">
                Save for Later
              </button>
              <div className="mt-5 space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Full lifetime access
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  {course.syllabus.reduce((a, w) => a + w.lessons, 0)} on-demand lessons
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Certificate of completion
                </div>
              </div>
            </motion.div>

            {/* Instructor card */}
            {instructor && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="glass rounded-2xl p-5"
              >
                <h3 className="text-white font-bold mb-4">Your Instructor</h3>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-xl bg-slate-700"
                  />
                  <div>
                    <p className="text-white font-medium text-sm">{instructor.name}</p>
                    <p className="text-violet-400 text-xs">{instructor.expertise}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-3">
                  {instructor.bio}
                </p>
                <Link
                  to={`/instructors/${instructor.id}`}
                  className="text-violet-400 text-xs hover:text-violet-300 font-medium transition-colors"
                >
                  View full profile →
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
