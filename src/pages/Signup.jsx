import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, Globe, Zap } from 'lucide-react';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        'devlearn_user',
        JSON.stringify({ email: form.email, name: form.name })
      );
      navigate('/dashboard');
    }, 1200);
  };

  const handleGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        'devlearn_user',
        JSON.stringify({ email: 'dev@gmail.com', name: 'Developer' })
      );
      navigate('/dashboard');
    }, 1000);
  };

  const fields = [
    { icon: <User size={16} />, name: 'name', type: 'text', placeholder: 'Full name' },
    { icon: <Mail size={16} />, name: 'email', type: 'email', placeholder: 'Email address' },
    { icon: <Lock size={16} />, name: 'password', type: showPassword ? 'text' : 'password', placeholder: 'Create password', hasToggle: true },
    { icon: <Lock size={16} />, name: 'confirm', type: showPassword ? 'text' : 'password', placeholder: 'Confirm password' },
  ];

  return (
    <>
      <Helmet>
        <title>Sign Up – DevLearn | Start Learning Free</title>
        <meta name="description" content="Create your free DevLearn account and start learning React, JavaScript, DSA, and AI today." />
      </Helmet>

      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="glass-strong rounded-3xl p-8 shadow-2xl shadow-black/40">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-900/40">
                <Zap size={22} className="text-white" />
              </div>
              <h1 className="text-2xl font-black text-white font-['Outfit']">Join DevLearn</h1>
              <p className="text-slate-400 text-sm mt-1">Create your free account and start learning</p>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogle}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl glass border border-white/10 text-slate-200 text-sm font-medium hover:border-violet-500/40 hover:text-white hover:bg-white/5 transition-all mb-6 disabled:opacity-60"
            >
              <Globe size={18} className="text-blue-400" />
              Sign up with Google
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-slate-500 text-xs">or with email</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="relative"
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="input-glass pl-11 pr-11"
                  />
                  {field.hasToggle && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  )}
                </motion.div>
              ))}

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-3 text-base disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </motion.button>
            </form>

            <p className="text-center text-slate-400 text-sm mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
