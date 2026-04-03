import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import { motion } from 'framer-motion';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <DashboardSidebar />
      <motion.main
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 p-8 overflow-auto"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
