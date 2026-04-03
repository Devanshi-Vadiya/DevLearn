import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Tag, BookOpen, GraduationCap } from 'lucide-react';
import { blogs } from '../data/blogs';
import { courses } from '../data/courses';
import BlogCard from '../components/BlogCard';
import CourseCard from '../components/CourseCard';

const categoryMeta = {
  react:           { label: 'React',           color: 'text-blue-400',    border: 'border-blue-500/30',    bg: 'bg-blue-600/10' },
  javascript:      { label: 'JavaScript',      color: 'text-yellow-400',  border: 'border-yellow-500/30',  bg: 'bg-yellow-600/10' },
  dsa:             { label: 'DSA',             color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-600/10' },
  'web development': { label: 'Web Development', color: 'text-pink-400', border: 'border-pink-500/30',    bg: 'bg-pink-600/10' },
  ai:              { label: 'AI',              color: 'text-violet-400',  border: 'border-violet-500/30',  bg: 'bg-violet-600/10' },
};

export default function Categories() {
  const { name } = useParams();
  const normalized = name.toLowerCase();
  const meta = categoryMeta[normalized] || {
    label: name, color: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-600/10',
  };

  const relatedBlogs = blogs.filter(
    (b) => b.category.toLowerCase() === normalized
  );

  const relatedCourses = courses.filter(
    (c) => c.category.toLowerCase() === normalized
  );

  return (
    <>
      <Helmet>
        <title>{meta.label} – DevLearn Categories</title>
        <meta
          name="description"
          content={`Explore all ${meta.label} blogs and courses on DevLearn.`}
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border ${meta.border} text-sm ${meta.color} mb-4`}
          >
            <Tag size={14} />
            Category
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] mb-4">
            <span className={meta.color}>{meta.label}</span>
          </h1>
          <p className="text-slate-400">
            {relatedBlogs.length} blogs · {relatedCourses.length} courses
          </p>
        </motion.div>

        {/* Courses Section */}
        {relatedCourses.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-violet-400" />
              <h2 className="text-2xl font-bold text-white font-['Outfit']">{meta.label} Courses</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCourses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Blogs Section */}
        {relatedBlogs.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={20} className="text-pink-400" />
              <h2 className="text-2xl font-bold text-white font-['Outfit']">{meta.label} Blogs</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {relatedBlogs.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} index={i} />
              ))}
            </div>
          </section>
        )}

        {relatedBlogs.length === 0 && relatedCourses.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🗂️</div>
            <h3 className="text-white text-xl font-semibold mb-2">No content found</h3>
            <p className="text-slate-400 mb-6">Nothing is available for the "{name}" category yet.</p>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        )}
      </div>
    </>
  );
}
