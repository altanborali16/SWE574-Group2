import { Card, Col } from 'react-bootstrap';
import LoginForm from '../Components/Forms/LoginForm';
import { Link } from 'react-router-dom';
import AuthAdvanceLayout from '../Components/Layouts/AuthAdvanceLayout';
import PageMetaData from './PageMetaData'
const SignIn = () => {
  return <>
  <PageMetaData title='Sign In' />
      <AuthAdvanceLayout>
        <Col xs={12}>
          <h1 className="display-4 text-white mb-4 position-relative">Welcome back!</h1>
        </Col>
        <Col sm={10} md={8} lg={6} className="position-relative z-index-1">
          <Card className="card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
            <h2 className="h1 mb-2">Sign in</h2>
            <p>
              Don&apos;t have an account?<Link to="/auth/sign-up"> Click here to sign up</Link>
            </p>
            <LoginForm />
          </Card>
        </Col>
      </AuthAdvanceLayout>
    </>;
};
export default SignIn;