import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// Lazy-loaded components
const SignIn = lazy(() => import('../Pages/SignInPage'));
const SignUp = lazy(() => import('../Pages/SignUpPage'));

// Loading fallback component
const Loading = () => <div>Loading...</div>;

export const authRoutes = [
  {
    path: '/auth/sign-in',
    name: 'Sign In',
    element: (
      <Suspense fallback={<Loading />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: '/auth/sign-up',
    name: 'Sign Up',
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: '/auth',
    element: <Navigate to="/auth/sign-in" replace />,
  },
];
