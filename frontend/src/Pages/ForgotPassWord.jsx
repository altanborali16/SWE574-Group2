import { Card } from 'react-bootstrap';
import ForgotPassForm from '../Components/Forms/ForgotPassForm';
import AuthLayout from '../Components/Layouts/AuthLayout';
import PageMetaData from '../Pages/PageMetaData';
const ForgotPassword = () => {
  return <>
      <PageMetaData title='Forgot Password' />
      <AuthLayout>
        <Card className="card-body rounded-3 text-center p-4 p-sm-5">
          <h1 className="mb-2">Forgot password?</h1>
          <p>Enter the email address associated with account.</p>
          <ForgotPassForm />
        </Card>
      </AuthLayout>
    </>;
};
export default ForgotPassword;