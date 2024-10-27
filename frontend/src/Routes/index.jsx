import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';


const HomePage = lazy(() => import('../Pages/HomePage'));
const ProfilePage = lazy(() => import('../Pages/ProfilePage'));
const CommunitiesPage = lazy(() => import('../Pages/CommunitiesPage'));
const MyCommunitiesPage = lazy(() => import('../Pages/MyCommunitiesPage'));
const CreateCommunityPage = lazy(() => import('../Pages/CreateCommunityPage'));

// Lazy-loaded components
const SignIn = lazy(() => import('../Pages/SignInPage'));
const SignUp = lazy(() => import('../Pages/SignUpPage'));
const ForgotPassWord = lazy(() => import('../Pages/ForgotPassWord'));

// Loading fallback component
const Loading = () => <div>Loading...</div>;

const generalRoutes = [{
  path: '/home',
  name: 'Home Page',
  element: (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  ),
}, 
{
  path: '/profile',
  name: 'Profile Page',
  element: (
    <Suspense fallback={<Loading />}>
      <ProfilePage />
    </Suspense>
  ),
},
{
  path: '/communities',
  name: 'Communities Page',
  element: (
    <Suspense fallback={<Loading />}>
      <CommunitiesPage />
    </Suspense>
  ),
},
{
  path: '/mycommunities',
  name: 'My Communities Page',
  element: (
    <Suspense fallback={<Loading />}>
      <MyCommunitiesPage />
    </Suspense>
  ),
},
{
  path: '/createcommunity',
  name: 'Create Community',
  element: (
    <Suspense fallback={<Loading />}>
      <CreateCommunityPage />
    </Suspense>
  ),
},
];

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
    path: '/auth/forgot-pass',
    name: 'Forgot Password',
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPassWord />
      </Suspense>
    ),
  },
  {
    path: '/auth',
    element: <Navigate to="/auth/sign-in" replace />,
  },
];

export const feedRoutes = [...generalRoutes];
