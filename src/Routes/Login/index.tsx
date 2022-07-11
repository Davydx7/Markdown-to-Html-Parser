import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';

import './login.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      <div className="loginPage">
        <h1 className="title">{id === '1' ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={id === '1' ? 'signUp' : 'Login'}>
          {id === '1' && (
            <>
              <select {...register('Title', { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
              <input
                type="text"
                placeholder="First name"
                {...register('First name', { required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Last name"
                {...register('Last name', { required: true, maxLength: 100 })}
              />
              <input
                type="tel"
                placeholder="Mobile number"
                {...register('Mobile number', { required: true, minLength: 6, maxLength: 16 })}
              />{' '}
            </>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register('Password', { required: true })}
          />
          {id === '1' && (
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('Confirm Password', { required: true })}
            />
          )}
          <Button type="submit">{id === '1' ? 'Sign Up' : 'Login'}</Button>
        </form>
        <p> or {id === '1' ? 'signUp' : 'login'} with:</p>
        <div className="socialLogin">
          <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
          <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
        </div>
        {id === '2' && (
          <Button type="button" group="tertiary" size="small">
            Forgot Password?
          </Button>
        )}

        <Button type="button" group="tertiary" size="small">
          {id === '1' ? (
            <Link to="/login/2">Existing User?</Link>
          ) : (
            <Link to="/login/1">New User?</Link>
          )}
        </Button>
      </div>
    </Layout>
  );
}

export default Login;
