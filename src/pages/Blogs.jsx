import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { blogs, blogCategories } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import CategoryPill from '../components/CategoryPill';

export default function Blogs() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blogs – DevLearn | Programming Articles & Tutorials</title>
        <meta
          name="description"
          content="Browse 500+ programming blogs on React, JavaScript, DSA, Web Development and AI — written by industry experts."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-pink-500/30 text-sm text-pink-300 mb-4">
            <BookOpen size={14} />
            {blogs.length} Articles Published
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] mb-4">
            Developer <span className="gradient-text">Blogs</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            In-depth articles, tutorials, and guides written by expert developers. Learn React, JavaScript, DSA, AI, and more.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search blogs..."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={setActiveCategory}
              />
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-6">
          Showing {filtered.length} {filtered.length === 1 ? 'blog' : 'blogs'}
          {activeCategory !== 'All' && ` in "${activeCategory}"`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-xl font-semibold mb-2">No blogs found</h3>
            <p className="text-slate-400">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
