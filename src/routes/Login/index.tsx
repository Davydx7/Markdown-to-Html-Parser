import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Button from '../../components/Button';
import Layout from '../../components/Layout';

import './login.scss';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur',
    // reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const {
    data: user,
    error,
    refetch,
    status
  } = useQuery(
    ['getUser'],
    // a call to the data base to get the user
    () => ({
      id: 1,
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      mobileNumber: '1234567890',
      email: '',
      password: '1234567890',
      confirmPassword: '1234567890'
    }),
    // undefined,
    {
      enabled: false,
      cacheTime: 0,
      refetchOnMount: false
      // refetchOnReconnect,
      // refetchOnWindowFocus,
    }
  );

  useEffect(() => {
    if (user) {
      navigate('/');
      console.log('user:', user);
    }

    if (error) {
      alert('User not found');
      console.log('error: ', error);
    }
  }, [status]);

  console.log('status1: ', status);

  const onSubmit = (loginData: any) => {
    refetch();
    console.log('statusPressed: ', status);
    // console.log('loginData: ', loginData);
  };

  return (
    <Layout>
      <div className="loginPage">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span className="label">
              Email:<i>*</i>
            </span>
            <input
              type="email"
              placeholder="example@domain.abc"
              {...register('email', {
                required: 'required'
                // pattern: {
                //   value: /you@example.com$/,
                //   message: 'Invalid Email'
                // }
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </label>

          <label>
            <span className="label">
              Password:<i>*</i>
            </span>
            <input
              type="password"
              placeholder="8 to 20 characters"
              {...register('password', {
                required: 'required',
                minLength: {
                  value: 8,
                  message: 'minimum length 8 characters'
                },
                maxLength: {
                  value: 20,
                  message: 'maximun length 20 characters'
                }
                // pattern: { value: /abcd1234567890/, message: 'Invalid password' }
              })}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </label>

          <Button
            // disabled={!isValid}
            type="submit">
            Login
          </Button>
        </form>
        <p> or login with:</p>
        <div className="socialLogin">
          <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
          <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
        </div>

        <Button type="button" group="tertiary" size="small">
          Forgot Password?
        </Button>
        <Button goTo="/signup" type="button" group="tertiary" size="small">
          New User?
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
