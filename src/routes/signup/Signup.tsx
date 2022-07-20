import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import useUser from '../../stores/server/serverStores/userData';

import './signup.scss';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur',
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

  const setUser = useUser((state) => state.setUser);

  const onSubmit = (data: any) => {
    console.log(data);

    // should be useQuery here to, send and wait for data that
    // will be used as userData
    setUser({
      id: faker.database.mongodbObjectId(),
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email
    });

    navigate('/', { replace: true });
  };

  console.log('sigup');
  return (
    <Layout>
      <div className="signUpPage">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                pattern: { value: /^[a-z]+$/i, message: 'Alphabelts only' },
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
                pattern: { value: /^[a-z]+$/i, message: 'Alphabelts only' },
                shouldUnregister: true
              })}
            />
            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
          </label>

          <label>
            <span className="label">Tel:</span>
            <input
              type="tel"
              placeholder="8 to 15 digits"
              {...register('mobileNumber', {
                required: false,
                pattern: {
                  value: /^\+?\d?\s?(\(\d{1,4}\))?[-\s./0-9]*$/,
                  message: 'Invalid mobile number'
                },
                minLength: { value: 8, message: 'min character length is 8' },
                maxLength: { value: 15, message: 'max character length is 15' },
                shouldUnregister: true
              })}
            />
            {errors.mobileNumber && <span className="error">{errors.mobileNumber.message}</span>}
          </label>

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

          <Button
            // disabled={!isValid}
            type="submit">
            Sign Up
          </Button>
        </form>

        <p> or signup with:</p>
        <div className="socialLogin">
          <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
          <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
        </div>
        <Button goTo="/login" type="button" group="tertiary" size="small">
          Existing User?
        </Button>
      </div>
    </Layout>
  );
};

export default Signup;
