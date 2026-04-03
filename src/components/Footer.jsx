import { Link } from 'react-router-dom';
import { Zap, Code, MessageCircle, Briefcase, Heart } from 'lucide-react';

const footerLinks = {
  Learn: [
    { label: 'All Courses', to: '/courses' },
    { label: 'All Blogs', to: '/blogs' },
    { label: 'Instructors', to: '/instructors' },
  ],
  Categories: [
    { label: 'React', to: '/categories/react' },
    { label: 'JavaScript', to: '/categories/javascript' },
    { label: 'DSA', to: '/categories/dsa' },
    { label: 'AI', to: '/categories/ai' },
  ],
  Account: [
    { label: 'Log In', to: '/login' },
    { label: 'Sign Up', to: '/signup' },
    { label: 'Dashboard', to: '/dashboard' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold font-['Outfit']">
                <span className="gradient-text">Dev</span>
                <span className="text-slate-100">Learn</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A premium learning platform for developers and programming students. 
              Learn, build, and grow your career.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Code, MessageCircle, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-violet-300 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-pink-500 fill-pink-500" /> by DevLearn Team © {new Date().getFullYear()}
          </p>
          <p className="text-slate-600 text-xs">
            Empowering developers, one lesson at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
