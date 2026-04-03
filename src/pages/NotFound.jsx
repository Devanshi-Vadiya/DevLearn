import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | DevLearn</title>
      </Helmet>

      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        {/* Big 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          className="relative mb-8"
        >
          <div className="text-[10rem] font-black font-['Outfit'] leading-none select-none opacity-10 text-white">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <SearchX size={80} className="text-violet-500 opacity-80" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] mb-4"
        >
          Page <span className="gradient-text">Not Found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg max-w-md mb-10"
        >
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/" className="btn-primary flex items-center gap-2 px-6 py-3">
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center gap-2 px-6 py-3"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { label: 'Courses', to: '/courses' },
            { label: 'Blogs', to: '/blogs' },
            { label: 'Instructors', to: '/instructors' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-xl glass border border-white/10 text-slate-400 hover:text-violet-300 hover:border-violet-500/30 text-sm transition-all"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
}
