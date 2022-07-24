import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Layout from '../../components/Layout';

import './login.scss';
import useServerUser from '../../stores/server/serverStores/userData';
import useLoggedUser from '../../stores/clientStores/loggedUser';
import PageHeader from '../../components/pageHeader';

type LoginData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData | ''>('');

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

  const getServerUser = useServerUser((state) => state.getServerUser);
  const setLoggedUser = useLoggedUser((state) => state.setLoggedUser);

  const {
    data: serverUser,
    error,
    status
  } = useQuery(
    ['getServerUser'],
    // a call to the data base to get the user with LoginData
    getServerUser,
    // () => undefined,
    {
      enabled: !!loginData,
      cacheTime: 0
    }
  );

  useEffect(() => {
    console.log('firing useEffect');

    if (status === 'success' && serverUser && loginData) {
      if (loginData.email === serverUser.email && loginData.password === serverUser.password) {
        localStorage.setItem('loggedUser', JSON.stringify(serverUser));
        // hoisting user over to zustand for mock sake and application state
        setLoggedUser(serverUser);

        navigate('/', { replace: true });
        // console.log('navigating....');
      } else {
        console.log('wrong details');
        setError('email', { type: 'custom', message: 'Invalid Credentials' });
        setError('password', { type: 'custom', message: 'Invalid Credentials' });
      }
      setLoginData(''); // disable query
    }

    if (status === 'error') {
      console.log('error-status ', error);
      setError('email', { type: 'custom', message: 'Invalid Credentials' });
      setError('password', { type: 'custom', message: 'Invalid Credentials' });
      // console.log('error', error);
      setLoginData('');
    }
  }, [loginData, status, error, serverUser, setLoggedUser, navigate, setError]);

  const onSubmit = (loginData: LoginData) => {
    setLoginData(loginData);
    // console.log('loginData: ', loginData);
  };

  return (
    <Layout>
      <div className="loginPage">
        <PageHeader heading="Login" homeButton backButton />

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
