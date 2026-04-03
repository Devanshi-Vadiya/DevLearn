import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy loaded pages for performancezdd
const Home = lazy(() => import('../pages/Home'));
const Blogs = lazy(() => import('../pages/Blogs'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Courses = lazy(() => import('../pages/Courses'));
const CourseDetail = lazy(() => import('../pages/CourseDetail'));
const Instructors = lazy(() => import('../pages/Instructors'));
const InstructorProfile = lazy(() => import('../pages/InstructorProfile'));
const Categories = lazy(() => import('../pages/Categories'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Dashboard pages
const DashboardOverview = lazy(() => import('../pages/dashboard/DashboardOverview'));
const MyCourses = lazy(() => import('../pages/dashboard/MyCourses'));
const SavedBlogs = lazy(() => import('../pages/dashboard/SavedBlogs'));
const Settings = lazy(() => import('../pages/dashboard/Settings'));

export default function AppRoutes() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner message="Loading..." />}>
          <Routes>
            {/* Main Application Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/:id" element={<BlogDetail />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:id" element={<CourseDetail />} />
              <Route path="instructors" element={<Instructors />} />
              <Route path="instructors/:id" element={<InstructorProfile />} />
              <Route path="categories/:name" element={<Categories />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardOverview />} />
              <Route path="my-courses" element={<MyCourses />} />
              <Route path="saved-blogs" element={<SavedBlogs />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
