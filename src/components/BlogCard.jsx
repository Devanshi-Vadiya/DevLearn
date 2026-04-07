import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';

const categoryColors = {
  React: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  JavaScript: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  DSA: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Web Development': 'bg-pink-500/15 text-pink-400 border-pink-500/30',
  AI: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
};

export default function BlogCard({ blog, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        {/* Category badge overlaid on image dbjwwh*/}
        <div className="absolute top-3 left-3">
          <span className={`category-pill border text-xs ${categoryColors[blog.category] || 'bg-slate-600/30 text-slate-400 border-slate-500/30'}`}>
            <Tag size={10} />
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={blog.authorAvatar}
            alt={blog.author}
            className="w-6 h-6 rounded-full bg-slate-700"
          />
          <span className="text-xs text-slate-400">{blog.author}</span>
          <span className="text-slate-600 text-xs">·</span>
          <span className="text-slate-500 text-xs">{blog.date}</span>
        </div>

        <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <Clock size={12} />
            {blog.readTime}
          </div>

          <Link
            to={`/blogs/${blog.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 group/btn transition-colors"
          >
            Read More
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
