import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { useAuthContext } from '../../Context/useAuthContext';
import { useNotificationContext } from '../../Context/useNotificationContext';
import httpClient from '../../Helpers/HttpClient';
import { connection_string } from '../../Context/constants';

const UseSignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    saveSession
  } = useAuthContext();
  const [searchParams] = useSearchParams();
  const {
    showNotification
  } = useNotificationContext();
  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });
  const redirectUser = () => {
    const redirectLink = searchParams.get('redirectTo');
    if (redirectLink) navigate(redirectLink);else navigate('/home');
  };
  const login = handleSubmit(async values => {
    try {
      console.log("Values : " , values)
      // console.log("request : " , 'localhost:8080/api/v1/auth/authenticate', values)
      const res = await httpClient.post( connection_string + 'auth/authenticate', values);
      console.log("Res : ", res);
      if (res.data.token) {
        saveSession(res.data.token);
        redirectUser();
        showNotification({
          message: 'Successfully logged in. Redirecting....',
          variant: 'success'
        });
      }
      else{
        showNotification({
          message: 'Wrong e-mail or password. Please try again....',
          variant: 'danger'
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
      console.log("e : " + e)
      if (e.response?.data?.error) {
        showNotification({
          message: e.response?.data?.error,
          variant: 'danger'
        });
      }
      else{
        showNotification({
          message: 'Wrong e-mail or password. Please try again....',
          variant: 'danger'
        });
      }
    } finally {
      setLoading(false);
    }
  });
  return {
    loading,
    login,
    control
  };
};
export default UseSignIn;