import PasswordFormInput from '../Inputs/PasswordFormInput.jsx';
import TextFormInput from '../Inputs/TextFormInput.jsx';
import PasswordStrengthMeter from '../Inputs/PasswordStrengthMeter.jsx';
import {
    developedBy,
    developedByLink,
  } from "../../Context/constants.js";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; //FormCheck
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import httpClient from '../../Helpers/HttpClient.js'
import { connection_string } from '../../Context/constants.js'
import { useNotificationContext } from '../../Context/useNotificationContext.jsx'

const SignUpForm = () => {
  const [firstPassword, setFirstPassword] = useState('');
  const navigate = useNavigate();
  const signUpSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('please enter your email'),
    username: yup.string().required('please enter your username'),
    password: yup.string().required('Please enter your password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
  });
  const {
    control,
    handleSubmit,
    watch,
    getValues
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });
  const {
    showNotification
  } = useNotificationContext();
  const onSubmit = async (values) => {
    try {
      const res = await httpClient.post(connection_string + 'auth/register', values);
  
      if (res.status === 200) {
        console.log("Registration successful");
        showNotification({
          message: 'Successfully registered. Redirecting....',
          variant: 'success'
        });
        navigate('/'); 
      } else {
        showNotification({
          message: 'Please try again....',
          variant: 'danger'
        });
        console.error("Unexpected response status:", res.status);
      }
    } catch (e) {
      showNotification({
        message: 'Please try again....',
        variant: 'danger'
      });
      console.error("Error during registration:", e);
      // Optionally, display an error message to the user
    }
  };
  
  useEffect(() => {
    setFirstPassword(getValues().password);
  }, [watch('password')]);
  return <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <TextFormInput name="email" control={control} containerClassName="input-group-lg" placeholder="Enter your email" />
        <small>We&apos;ll never share your email with anyone else.</small>
      </div>
      <div className="mb-3">
        <TextFormInput name="username" control={control} containerClassName="input-group-lg" placeholder="Username" />
        <small>We&apos;ll never share your email with anyone else.</small>
      </div>
      <div className="mb-3 position-relative">
        <PasswordFormInput name="password" control={control} size="lg" placeholder="Enter new password" />
        <div className="mt-2">
          <PasswordStrengthMeter password={firstPassword} />
        </div>
      </div>
      <PasswordFormInput name="confirmPassword" control={control} size="lg" containerClassName="mb-3" placeholder="Confirm password" />
      {/* <div className="mb-3 text-start">
        <FormCheck label="Keep me signed in" id="termAndCondition" />
      </div> */}
      <div className="d-grid">
        <Button variant="primary" type="submit" size="lg">
          Sign me up
        </Button>
      </div>
      <p className="mb-0 mt-3 text-center">
        {/* ©{currentYear} */}
        <Link target="_blank" to={developedByLink}>
          {developedBy}.
        </Link>
        {/* All rights reserved */}
      </p>
    </form>;
};
export default SignUpForm;