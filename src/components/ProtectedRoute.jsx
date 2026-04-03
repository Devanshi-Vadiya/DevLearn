import { Navigate } from 'react-router-dom';

// Simulated authentication check
// In a real app, this would check a token in localStorage/context
const isAuthenticated = () => {
  return localStorage.getItem('devlearn_user') !== null;
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
