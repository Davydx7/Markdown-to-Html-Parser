import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import visa from '../../assets/png/visa.png';
import mastercard from '../../assets/png/mastercard.png';
import americanExpress from '../../assets/png/americanExpress.png';

import './payment.scss';

type PaymentDetails = {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  name: string;
  cardType: string;
  retainCard: boolean;
};

const Payment: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PaymentDetails>({
    defaultValues: {
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      name: '',
      cardType: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className="paymentPage">
        <h1 className="title">Check Out</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              type="text"
              placeholder="Card Number"
              {...register('cardNumber', { required: 'required', maxLength: 20 })}
            />
            {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
          </label>

          <fieldset>
            <label htmlFor="visa">
              <input
                {...register('cardType', { required: 'required' })}
                name="cardType"
                type="radio"
                id="visa"
                value="visa"
              />
              <img src={visa} alt="visa" />
            </label>

            <label htmlFor="masterCard">
              <input
                {...register('cardType', { required: 'required' })}
                name="cardType"
                type="radio"
                id="masterCard"
                value="masterCard"
              />
              <img src={mastercard} alt="mastercard" />
            </label>

            <label htmlFor="americanExpress">
              <input
                {...register('cardType', { required: 'required' })}
                name="cardType"
                type="radio"
                id="americanExpress"
                value="americanExpress"
              />
              <img src={americanExpress} alt="americanExpress" />
            </label>
            {errors.cardType && <span className="error">{errors.cardType.message}</span>}
          </fieldset>

          <label>
            <input
              type="datetime"
              placeholder="Expiration Month"
              {...register('expiryMonth', { required: 'required' })}
            />
            {errors.expiryMonth && <span className="error">{errors.expiryMonth.message}</span>}
          </label>
          <label>
            <input
              type="datetime"
              placeholder="Expiration Month"
              {...register('expiryYear', { required: 'required' })}
            />
            {errors.expiryYear && <span className="error">{errors.expiryYear.message}</span>}
          </label>

          <label>
            <input
              type="text"
              maxLength={3}
              placeholder="CVV"
              {...register('cvv', {
                required: 'required',
                pattern: { value: /^[0-9]{3}$/, message: 'Invalid CVV' }
              })}
            />
            {errors.cvv && <span className="error">{errors.cvv.message}</span>}
          </label>

          <label>
            <input
              type="text"
              placeholder="Card Holder Name"
              {...register('name', { required: 'required' })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </label>

          <label className="remember">
            <input
              type="checkbox"
              placeholder="Save credit information"
              {...register('retainCard')}
            />
            <p>Remeber details</p>
          </label>

          <Button type="submit" size="medium" group="primary">
            Pay
          </Button>
        </form>
      </div>
    </Layout>
  );
};
export default Payment;
