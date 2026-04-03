import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, GraduationCap, Sparkles, TrendingUp, Code2 } from 'lucide-react';
import { blogs } from '../data/blogs';
import { courses } from '../data/courses';
import BlogCard from '../components/BlogCard';
import CourseCard from '../components/CourseCard';
import StatsSection from '../components/StatsSection';

/*
 * SEO NOTE: Without react-helmet-async or SSR (Server-Side Rendering),
 * search engines like Google may crawl this page and only see the bare
 * HTML shell — missing the title, meta description, and dynamic content.
 * react-helmet-async injects <title> and <meta> tags into the <head>,
 * but these are only visible to bots that execute JavaScript.
 * For true SEO, use Next.js (SSR/SSG) or Remix with server rendering.
 */

const features = [
  {
    icon: <BookOpen size={22} className="text-violet-400" />,
    title: 'Expert Blogs',
    desc: '500+ articles from industry professionals on React, DSA, AI, and more.',
    gradient: 'from-violet-600/20 to-violet-800/5',
    border: 'border-violet-500/20',
  },
  {
    icon: <GraduationCap size={22} className="text-pink-400" />,
    title: 'Structured Courses',
    desc: '100+ courses from beginner to advanced, completely free.',
    gradient: 'from-pink-600/20 to-pink-800/5',
    border: 'border-pink-500/20',
  },
  {
    icon: <Code2 size={22} className="text-blue-400" />,
    title: 'Hands-on Projects',
    desc: 'Build real projects and add them to your portfolio.',
    gradient: 'from-blue-600/20 to-blue-800/5',
    border: 'border-blue-500/20',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DevLearn – Learn. Build. Grow.</title>
        <meta
          name="description"
          content="DevLearn is a premium platform for programming blogs, coding courses, and developer resources. Start your journey today."
        />
      </Helmet>

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 relative overflow-hidden">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 text-sm text-violet-300 mb-8"
        >
          <Sparkles size={14} className="text-violet-400" />
          New: AI & Machine Learning courses just launched 🎉
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black font-['Outfit'] leading-tight mb-6"
        >
          <span className="gradient-text">Learn.</span>{' '}
          <span className="text-white">Build.</span>{' '}
          <span className="text-slate-300">Grow.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover programming blogs, coding courses, and resources designed for
          students and developers ready to level up their skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/courses" className="btn-primary flex items-center gap-2 text-base px-7 py-3">
            <GraduationCap size={18} />
            Explore Courses
            <ArrowRight size={16} />
          </Link>
          <Link to="/blogs" className="btn-outline flex items-center gap-2 text-base px-7 py-3">
            <BookOpen size={18} />
            Read Blogs
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="w-0.5 h-10 bg-gradient-to-b from-violet-500 to-transparent rounded-full animate-pulse" />
          <span className="text-slate-600 text-xs">scroll</span>
        </motion.div>
      </section>

      {/* ── Features ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${f.gradient} border ${f.border} backdrop-blur-sm`}
            >
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <StatsSection />

      {/* ── Featured Courses ─────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} className="text-violet-400" />
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
              Top Courses
            </h2>
          </div>
          <Link to="/courses" className="btn-outline text-sm py-2 px-5 hidden sm:flex items-center gap-2">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.slice(0, 3).map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <div className="mt-6 sm:hidden flex justify-center">
          <Link to="/courses" className="btn-outline text-sm py-2 px-6 flex items-center gap-2">
            View All Courses <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Trending Blogs ────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-pink-400" />
              <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">Trending</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
              Latest Blogs
            </h2>
          </div>
          <Link to="/blogs" className="btn-outline text-sm py-2 px-5 hidden sm:flex items-center gap-2">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.slice(0, 4).map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>

        <div className="mt-6 sm:hidden flex justify-center">
          <Link to="/blogs" className="btn-outline text-sm py-2 px-6 flex items-center gap-2">
            View All Blogs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-pink-600/10 rounded-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] mb-4">
              Ready to start your{' '}
              <span className="gradient-text">coding journey?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Join 20,000+ developers already learning on DevLearn.
            </p>
            <Link to="/signup" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
              Start Learning Free
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
