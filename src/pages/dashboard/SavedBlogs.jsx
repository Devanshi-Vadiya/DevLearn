import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookmarkCheck, Clock, Tag, Trash2, ExternalLink } from 'lucide-react';
import { blogs } from '../../data/blogs';

const categoryColors = {
  React: 'bg-blue-500/15 text-blue-400',
  JavaScript: 'bg-yellow-500/15 text-yellow-400',
  DSA: 'bg-emerald-500/15 text-emerald-400',
  'Web Development': 'bg-pink-500/15 text-pink-400',
  AI: 'bg-violet-500/15 text-violet-400',
};

export default function SavedBlogs() {
  return (
    <>
      <Helmet>
        <title>Saved Blogs – DevLearn Dashboard</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white font-['Outfit'] mb-1">Saved Blogs</h1>
        <p className="text-slate-400">Your reading list — {blogs.length} articles saved.</p>
      </motion.div>

      <div className="space-y-3">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-xl p-4 flex items-center gap-4 group hover:border-violet-500/20 border border-transparent transition-all"
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${categoryColors[blog.category] || 'bg-slate-600/30 text-slate-400'}`}
                >
                  {blog.category}
                </span>
              </div>
              <h3 className="text-white text-sm font-semibold truncate group-hover:text-violet-300 transition-colors">
                {blog.title}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-slate-500 text-xs">
                <span>{blog.author}</span>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                to={`/blogs/${blog.id}`}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-violet-400 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <ExternalLink size={14} />
              </Link>
              <button className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-red-400 border border-white/10 hover:border-red-500/30 transition-all">
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-24">
          <BookmarkCheck size={48} className="text-slate-700 mx-auto mb-4" />
          <h3 className="text-white text-xl font-semibold mb-2">No saved blogs yet</h3>
          <p className="text-slate-400 mb-5">Start reading and bookmark blogs to find them here.</p>
          <Link to="/blogs" className="btn-primary">Browse Blogs</Link>
        </div>
      )}
    </>
  );
}
