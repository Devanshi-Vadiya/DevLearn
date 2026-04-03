import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Decorative background blobs
function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="blob w-96 h-96 bg-violet-600 top-[-100px] left-[-100px]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="blob w-80 h-80 bg-pink-500 top-[30%] right-[-80px]"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="blob w-72 h-72 bg-blue-600 bottom-[10%] left-[20%]"
        style={{ animationDelay: '6s' }}
      />
      {/* Floating grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      <BackgroundBlobs />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="pt-20 relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
