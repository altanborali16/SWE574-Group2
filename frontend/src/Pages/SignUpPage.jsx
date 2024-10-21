import { Card } from 'react-bootstrap';
import SignUpForm from '../Components/Forms/SignUpForm.jsx';
import { Link } from 'react-router-dom';
import AuthLayout from '../Components/Layouts/AuthLayout';
import PageMetaData from './PageMetaData'
const SignUp = () => {
  return <>
      <PageMetaData title='Sign Up' />
      <AuthLayout>
        <Card className="card-body rounded-3 p-4 p-sm-5">
          <div className="text-center">
            <h1 className="mb-2">Sign up</h1>
            <span className="d-block">
              Already have an account? <Link to="/auth/sign-in">Sign in here</Link>
            </span>
          </div>
          <SignUpForm />
        </Card>
      </AuthLayout>
    </>;
};
export default SignUp;