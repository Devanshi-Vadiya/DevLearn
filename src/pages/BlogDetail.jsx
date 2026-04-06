import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, Tag, Share2, Bookmark } from 'lucide-react';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';

/*
 * SEO DEMONSTRATION:
 * Without react-helmet-async or SSR, when a search engine bot visits
 * /blogs/1, it gets an empty HTML shell and cannot see the blog title
 * or description dynamically set below. This is the core React SEO problem.
 * react-helmet-async helps for bots that render JavaScript (like Googlebot),
 * but for other crawlers, you need SSR via Next.js or Remix.zzzzz
 */

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Blog Not Found</h1>
        <Link to="/blogs" className="btn-primary">← Back to Blogs</Link>
      </div>
    );
  }

  const related = blogs.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{blog.title} – DevLearn</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta name="author" content={blog.author} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden mb-8 h-64 sm:h-80"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass border border-violet-500/20 text-violet-300 text-xs"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] leading-tight mb-6"
        >
          {blog.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/10"
        >
          <div className="flex items-center gap-2">
            <img
              src={blog.authorAvatar}
              alt={blog.author}
              className="w-8 h-8 rounded-full bg-slate-700"
            />
            <span className="text-slate-300 text-sm font-medium">{blog.author}</span>
          </div>
          <span className="flex items-center gap-1 text-slate-400 text-sm">
            <Calendar size={14} />
            {blog.date}
          </span>
          <span className="flex items-center gap-1 text-slate-400 text-sm">
            <Clock size={14} />
            {blog.readTime}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors">
              <Share2 size={16} />
            </button>
            <button className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-pink-400 transition-colors">
              <Bookmark size={16} />
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div
            className="prose prose-invert prose-violet max-w-none text-slate-300 leading-relaxed"
            style={{
              lineHeight: '1.8',
            }}
          >
            {blog.content.split('\n').map((line, i) => {
              if (line.startsWith('## '))
                return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
              if (line.startsWith('### '))
                return <h3 key={i} className="text-xl font-bold text-violet-300 mt-6 mb-3">{line.replace('### ', '')}</h3>;
              if (line.startsWith('```'))
                return null;
              if (line.trim() === '')
                return <br key={i} />;
              return <p key={i} className="mb-3 text-slate-300">{line}</p>;
            })}
          </div>
        </motion.div>

        {/* Related Blogs */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white font-['Outfit'] mb-6">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
