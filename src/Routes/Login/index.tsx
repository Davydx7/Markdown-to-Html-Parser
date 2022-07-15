import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';

import './login.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onSubmit',
    // reValidateMode: 'onBlur',
    defaultValues: {
      title: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const onSubmit = (data: any) => {
    navigate(`/details`);
    console.log(data);
  };

  return (
    <Layout>
      <div className="loginPage">
        <h1 className="title">{id === '1' ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={id === '1' ? 'signUp' : 'Login'}>
          {id === '1' && (
            <>
              {/* <label>
                <span className="label">
                  Title:<i>*</i>
                </span>
                <select
                  placeholder="Title"
                  {...register('title', { required: 'required', shouldUnregister: true })}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
                {errors.title && <span className="error">{errors.title.message}</span>}
              </label> */}

              <label>
                <span className="label">
                  Firstname:<i>*</i>
                </span>
                <input
                  type="text"
                  placeholder="2 to 15 characters"
                  {...register('firstName', {
                    required: 'required',
                    minLength: { value: 2, message: 'min character length is 2' },
                    maxLength: { value: 15, message: 'max character length is 15' },
                    shouldUnregister: true
                  })}
                />
                {errors.firstName && <span className="error">{errors.firstName.message}</span>}
              </label>

              <label>
                <span className="label">
                  Lastname:<i>*</i>
                </span>
                <input
                  type="text"
                  placeholder="2 to 15 characters"
                  {...register('lastName', {
                    required: 'required',
                    minLength: { value: 2, message: 'min character length is 2' },
                    maxLength: { value: 15, message: 'max character length is 15' },
                    shouldUnregister: true
                  })}
                />
                {errors.lastName && <span className="error">{errors.lastName.message}</span>}
              </label>

              <label>
                <span className="label">Tel:</span>
                <input
                  type="tel"
                  placeholder="8 to 14 digits"
                  {...register('mobileNumber', {
                    required: false,
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
                      message: 'Invalid mobile number'
                    },
                    minLength: { value: 8, message: 'min character length is 8' },
                    maxLength: { value: 14, message: 'max character length is 14' },
                    shouldUnregister: true
                  })}
                />
                {errors.mobileNumber && (
                  <span className="error">{errors.mobileNumber.message}</span>
                )}
              </label>
            </>
          )}
          <label>
            <span className="label">
              Email:<i>*</i>
            </span>
            <input
              type="email"
              placeholder="example@domain.abc"
              {...register('email', {
                required: 'required',
                pattern: {
                  value: /you@example.com$/,
                  message: 'Invalid Email'
                }
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
                },
                pattern: { value: /abcd1234567890/, message: 'Invalid password' }
              })}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </label>
          {id === '1' && (
            <label>
              <span className="label">
                Confirm Password:<i>*</i>
              </span>
              <input
                type="password"
                placeholder="confirmPassword"
                {...register('confirmPassword', { required: 'required', shouldUnregister: true })}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}
            </label>
          )}
          <Button
            // disabled={!isValid}
            type="submit">
            {id === '1' ? 'Sign Up' : 'Login'}
          </Button>
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
