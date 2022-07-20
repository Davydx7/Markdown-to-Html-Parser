import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Layout from '../../components/Layout';

import './login.scss';
import useUser from '../../stores/server/serverStores/userData';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState('');

  console.log('useState: ', loginData);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur',
    // reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const getUser = useUser((state) => state.getUser);

  const {
    data: user,
    error,
    status
  } = useQuery(
    ['getUser'],
    // a call to the data base to get the user wutg LoginData
    getUser,
    // () => undefined,
    {
      enabled: !!loginData,
      cacheTime: 0
    }
  );

  useEffect(() => {
    console.log('status: ', status);
    if (status === 'success') {
      navigate('/', { replace: true });
      console.log('navigating....');
      console.log('userSuccess!!!!:', user);
      setLoginData('');
    }

    console.log('firing useEffect');
    if (status === 'error') {
      setError('email', { type: 'custom', message: 'email and password does not match' });
      setError('password', { type: 'custom', message: 'email and password does not match' });
      console.log('error', error);
      setLoginData('');
    }
  }, [loginData, status, error]);

  const onSubmit = (loginData: any) => {
    setLoginData(loginData);
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
