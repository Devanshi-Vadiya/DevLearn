import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { courses, courseCategories } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import CategoryPill from '../components/CategoryPill';

export default function Courses() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Courses – DevLearn | Free Coding Courses</title>
        <meta
          name="description"
          content="Browse 100+ free coding courses in React, JavaScript, DSA, Web Development and AI — taught by expert instructors."
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
            <GraduationCap size={14} />
            {courses.length} Courses Available
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] mb-4">
            Free <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            World-class programming courses from beginner to advanced — all completely free. 
            Learn React, JavaScript, DSA, AI, and more.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search courses or instructors..."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {courseCategories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={setActiveCategory}
              />
            ))}
          </div>
        </motion.div>

        <p className="text-slate-500 text-sm mb-6">
          Showing {filtered.length} {filtered.length === 1 ? 'course' : 'courses'}
          {activeCategory !== 'All' && ` in "${activeCategory}"`}
        </p>

        {/* Grid */}
        
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-white text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-slate-400">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
