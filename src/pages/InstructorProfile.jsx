import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowLeft, MapPin, Code, MessageCircle, Briefcase,
  GraduationCap, BookOpen, Star, Users
} from 'lucide-react';
import { instructors } from '../data/instructors';
import { courses } from '../data/courses';
import { blogs } from '../data/blogs';
import CourseCard from '../components/CourseCard';
import BlogCard from '../components/BlogCard';

export default function InstructorProfile() {
  const { id } = useParams();
  const instructor = instructors.find((i) => i.id === id);

  if (!instructor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Instructor Not Found</h1>
        <Link to="/instructors" className="btn-primary">← Back to Instructors</Link>
      </div>
    );
  }

  const instructorCourses = courses.filter((c) => instructor.courseIds.includes(c.id));
  const instructorBlogs = blogs.filter((b) => instructor.blogIds.includes(b.id));

  return (
    <>
      <Helmet>
        <title>{instructor.name} – DevLearn Instructor</title>
        <meta name="description" content={`${instructor.name} — ${instructor.expertise}. ${instructor.bio.slice(0, 120)}...`} />
      </Helmet>

      {/* Cover Image */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src={instructor.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-20 relative z-10">
        {/* Back link */}
        <Link
          to="/instructors"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Instructors
        </Link>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-violet-500/40 bg-slate-700 flex-shrink-0">
              <img src={instructor.avatar} alt={instructor.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] mb-1">
                    {instructor.name}
                  </h1>
                  <p className="text-violet-400 font-medium">{instructor.expertise}</p>
                  {instructor.location && (
                    <p className="text-slate-400 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={13} />
                      {instructor.location}
                    </p>
                  )}
                </div>
                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  {[Code, MessageCircle, Briefcase].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-violet-400 border border-white/10 hover:border-violet-500/40 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-5 mt-4">
                <span className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <GraduationCap size={15} className="text-violet-400" />
                  <strong className="text-white">{instructor.coursesCount}</strong> Courses
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <BookOpen size={15} className="text-pink-400" />
                  <strong className="text-white">{instructor.blogsCount}</strong> Blogs
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <Users size={15} className="text-blue-400" />
                  <strong className="text-white">{instructor.studentsCount.toLocaleString()}</strong> Students
                </span>
                <span className="flex items-center gap-1.5 text-yellow-400 text-sm">
                  <Star size={15} className="fill-yellow-400" />
                  <strong>{instructor.rating}</strong> Rating
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-3">About</h2>
          <p className="text-slate-400 leading-relaxed">{instructor.bio}</p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {instructor.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium glass border border-violet-500/20 text-violet-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Courses */}
        {instructorCourses.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-white font-['Outfit'] mb-5">
              Courses by {instructor.name.split(' ')[0]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {instructorCourses.map((c, i) => (
                <CourseCard key={c.id} course={c} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Blogs */}
        {instructorBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white font-['Outfit'] mb-5">
              Blogs by {instructor.name.split(' ')[0]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {instructorBlogs.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
