import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  GraduationCap,
  BookmarkCheck,
  Settings,
  LogOut,
  Zap,
} from 'lucide-react';

const links = [
  { to: '/dashboard', label: 'Overview', icon: <LayoutDashboard size={17} />, end: true },
  { to: '/dashboard/my-courses', label: 'My Courses', icon: <GraduationCap size={17} /> },
  { to: '/dashboard/saved-blogs', label: 'Saved Blogs', icon: <BookmarkCheck size={17} /> },
  { to: '/dashboard/settings', label: 'Settings', icon: <Settings size={17} /> },
];

export default function DashboardSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('devlearn_user');
    navigate('/login');
  };

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-64 min-h-screen glass-strong border-r border-white/5 p-6 flex flex-col"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center">
          <Zap size={15} className="text-white" />
        </div>
        <span className="font-bold font-['Outfit']">
          <span className="gradient-text">Dev</span>
          <span className="text-slate-100">Learn</span>
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
      >
        <LogOut size={17} />
        Logout
      </button>
    </motion.aside>
  );
}
