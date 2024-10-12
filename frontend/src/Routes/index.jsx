import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

//auth routes
const SignIn = lazy(() => import('../Pages/SignInPage'));

export const authRoutes = [{
    path: '/auth/sign-in',
    name: 'Sign In',
    element: <SignIn />
}];
