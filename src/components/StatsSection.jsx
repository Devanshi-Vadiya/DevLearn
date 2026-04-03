import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Courses', gradient: 'from-violet-500 to-purple-600' },
  { value: '20k+', label: 'Students', gradient: 'from-pink-500 to-rose-600' },
  { value: '500+', label: 'Blogs', gradient: 'from-blue-500 to-cyan-600' },
  { value: '50+', label: 'Instructors', gradient: 'from-emerald-500 to-teal-600' },
];

export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-transform"
            >
              <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
