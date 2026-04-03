import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  User, Mail, Bell, Moon, Sun, Shield,
  Save, Camera, CheckCircle2
} from 'lucide-react';

export default function Settings() {
  const stored = JSON.parse(localStorage.getItem('devlearn_user') || '{}');
  const [name, setName] = useState(stored.name || 'Developer');
  const [email, setEmail] = useState(stored.email || '');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    newCourse: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('devlearn_user', JSON.stringify({ name, email }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const sectionClass = 'glass rounded-2xl p-6 mb-5';
  const labelClass = 'block text-slate-300 text-sm font-medium mb-2';

  return (
    <>
      <Helmet>
        <title>Settings – DevLearn Dashboard</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white font-['Outfit'] mb-1">Settings</h1>
        <p className="text-slate-400">Manage your profile, preferences, and notifications.</p>
      </motion.div>

      <div className="max-w-2xl space-y-5">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={sectionClass}
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <User size={18} className="text-violet-400" />
            Profile Information
          </h2>

          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                {name.charAt(0).toUpperCase()}
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-violet-600 border-2 border-[#0F172A] flex items-center justify-center">
                <Camera size={11} className="text-white" />
              </button>
            </div>
            <div>
              <p className="text-white font-medium">{name}</p>
              <p className="text-slate-500 text-sm">{email || 'no email set'}</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <div className="relative">
                <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-glass pl-11"
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass pl-11"
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                saved
                  ? 'bg-emerald-600 text-white'
                  : 'btn-primary'
              }`}
            >
              {saved ? (
                <>
                  <CheckCircle2 size={15} />
                  Saved!
                </>
              ) : (
                <>
                  <Save size={15} />
                  Save Changes
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={sectionClass}
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            {darkMode ? <Moon size={18} className="text-violet-400" /> : <Sun size={18} className="text-yellow-400" />}
            Appearance
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Dark Mode</p>
              <p className="text-slate-400 text-xs mt-0.5">
                {darkMode ? 'Currently using dark theme' : 'Currently using light theme'}
              </p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-violet-600' : 'bg-slate-600'
              }`}
            >
              <motion.div
                animate={{ x: darkMode ? 24 : 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
              />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {[
              { label: 'Dark', desc: 'Default', active: darkMode, icon: <Moon size={18} /> },
              { label: 'Light', desc: 'Coming soon', active: !darkMode, icon: <Sun size={18} /> },
            ].map((theme) => (
              <button
                key={theme.label}
                onClick={() => setDarkMode(theme.label === 'Dark')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  theme.active
                    ? 'border-violet-500 bg-violet-600/10'
                    : 'border-white/10 glass hover:border-white/20'
                }`}
              >
                <div className={`mb-2 ${theme.active ? 'text-violet-400' : 'text-slate-400'}`}>
                  {theme.icon}
                </div>
                <p className="text-white text-sm font-medium">{theme.label}</p>
                <p className="text-slate-500 text-xs">{theme.desc}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={sectionClass}
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <Bell size={18} className="text-pink-400" />
            Notifications
          </h2>

          <div className="divide-y divide-white/5">
            {[
              { key: 'email', label: 'Email Notifications', desc: 'Receive updates and weekly digests' },
              { key: 'push', label: 'Push Notifications', desc: 'Browser push notifications' },
              { key: 'weekly', label: 'Weekly Digest', desc: 'Summary of new content every week' },
              { key: 'newCourse', label: 'New Course Alerts', desc: 'Get notified when new courses launch' },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
                <button
                  onClick={() => setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))}
                  className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                    notifications[key] ? 'bg-violet-600' : 'bg-slate-700'
                  }`}
                >
                  <motion.div
                    animate={{ x: notifications[key] ? 20 : 2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={sectionClass}
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <Shield size={18} className="text-emerald-400" />
            Security
          </h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-xl glass border border-white/10 hover:border-violet-500/30 text-slate-300 text-sm hover:text-white transition-all">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl glass border border-white/10 hover:border-violet-500/30 text-slate-300 text-sm hover:text-white transition-all">
              Two-Factor Authentication
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl glass border border-red-500/20 hover:border-red-500/40 text-red-400 text-sm hover:text-red-300 transition-all">
              Delete Account
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
