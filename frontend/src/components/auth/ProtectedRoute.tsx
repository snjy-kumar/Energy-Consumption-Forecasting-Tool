// ProtectedRoute.js

import { Navigate, Outlet } from 'react-router-dom';  // Outlet is for nested routes
import useProtected from '../../hooks/useAuth';  // Import the custom hook

const ProtectedRoute = () => {
  const { message } = useProtected();  // Call the useProtected hook

  // If there's no message, that means the user is not authenticated
  if (!message) {
    return <Navigate to="/login" />;  // Redirect to login if not authenticated
  }

  // If authenticated, render the child routes (e.g., Dashboard, Profile, etc.)
  return <Outlet />;
};

export default ProtectedRoute;