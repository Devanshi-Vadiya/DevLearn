export default function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
        active
          ? 'bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-900/30'
          : 'glass text-slate-400 border-white/10 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10'
      }`}
    >
      {label}
    </button>
  );
}
