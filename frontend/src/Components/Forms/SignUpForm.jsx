import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFormInput from '../Inputs/TextFormInput.jsx';
import PasswordFormInput from '../Inputs/PasswordFormInput.jsx';
import PasswordStrengthMeter from '../Inputs/PasswordStrengthMeter.jsx';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'; // Updated import
import { useEffect, useState } from 'react';
import httpClient from '../../Helpers/HttpClient.js';
import { connection_string } from '../../Context/constants.js';
import { useNotificationContext } from '../../Context/useNotificationContext.jsx';
import { useAuthContext } from '../../Context/useAuthContext';

// Import developedBy and developedByLink
import { developedBy, developedByLink } from '../../Context/constants.js';
// If not defined in constants.js, define them directly:
// const developedBy = 'Your Company Name';
// const developedByLink = 'https://yourcompanywebsite.com';

const SignUpForm = () => {
  const [firstPassword, setFirstPassword] = useState('');
  const navigate = useNavigate();
  const { saveSession } = useAuthContext();
  const { showNotification } = useNotificationContext();

  const signUpSchema = yup.object({
    firstname: yup.string().required('Please enter your first name'),
    lastname: yup.string().required('Please enter your last name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const { control, handleSubmit, watch, getValues } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    setFirstPassword(getValues().password);
  }, [watch('password')]);

  const onSubmit = async (values) => {
    try {
      const { confirmPassword, ...requestData } = values; // Exclude confirmPassword
      const res = await httpClient.post(connection_string + 'auth/register', requestData);

      if (res.status === 200) {
        // Save the accessToken
        saveSession(res.data.accessToken);

        showNotification({
          message: 'Successfully registered. Redirecting....',
          variant: 'success',
        });

        navigate('/home'); // Redirect to the desired page
      } else {
        showNotification({
          message: 'Registration failed. Please try again.',
          variant: 'danger',
        });
        console.error('Unexpected response status:', res.status);
      }
    } catch (e) {
      showNotification({
        message: 'An error occurred during registration. Please try again.',
        variant: 'danger',
      });
      console.error('Error during registration:', e);
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <TextFormInput
          name="firstname"
          control={control}
          containerClassName="input-group-lg"
          placeholder="First Name"
        />
      </div>
      <div className="mb-3">
        <TextFormInput
          name="lastname"
          control={control}
          containerClassName="input-group-lg"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-3">
        <TextFormInput
          name="email"
          control={control}
          containerClassName="input-group-lg"
          placeholder="Enter your email"
        />
        <small>We'll never share your email with anyone else.</small>
      </div>
      <div className="mb-3">
        <TextFormInput
          name="username"
          control={control}
          containerClassName="input-group-lg"
          placeholder="Username"
        />
      </div>
      <div className="mb-3 position-relative">
        <PasswordFormInput
          name="password"
          control={control}
          size="lg"
          placeholder="Enter new password"
        />
        <div className="mt-2">
          <PasswordStrengthMeter password={firstPassword} />
        </div>
      </div>
      <PasswordFormInput
        name="confirmPassword"
        control={control}
        size="lg"
        containerClassName="mb-3"
        placeholder="Confirm password"
      />
      <div className="d-grid">
        <Button variant="primary" type="submit" size="lg">
          Sign me up
        </Button>
      </div>
      <p className="mb-0 mt-3 text-center">
        <Link target="_blank" to={developedByLink}>
          {developedBy}
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
