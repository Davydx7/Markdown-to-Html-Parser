import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import Layout from '../../components/Layout';

import './login.scss';
import useServerUser from '../../stores/server/serverStores/userData';
import useLoggedUser from '../../stores/clientStores/loggedUser';
import PageHeader from '../../components/pageHeader';
import { User } from '../../stores/server/serverData/users';

type LoginData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const serverUser = useServerUser((state) => state.serverUser);
  const setLoggedUser = useLoggedUser((state) => state.setLoggedUser);
  const { id } = useParams();

  const mutation = useMutation(
    (loginData: LoginData) => {
      if (loginData.email === serverUser?.email && loginData.password === serverUser?.password) {
        return Promise.resolve(serverUser as User);
      }
      return Promise.reject(new Error('failed Credentials'));
    },
    {
      onSuccess: (serverUserData) => {
        localStorage.setItem('loggedUser', JSON.stringify(serverUserData));

        // hoisting user over to zustand for mock sake and application state
        setLoggedUser(serverUserData);

        if (id !== '1') {
          navigate(`/flights/${id}`);
        } else {
          navigate('/', { replace: true });
        }
      },
      onError: () => {
        setError('email', { type: 'custom', message: 'Invalid Credentials' });
        setError('password', { type: 'custom', message: 'Invalid Credentials' });
      }
    }
  );

  const onSubmit = (loginData: LoginData) => {
    mutation.mutate(loginData);
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
        <Button goTo={`/signup/${id}`} type="button" group="tertiary" size="small">
          New User?
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
