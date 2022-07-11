import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';
import visa from '../../assets/png/visa.png';
import mastercard from '../../assets/png/mastercard.png';
import americanExpress from '../../assets/png/americanExpress.png';

import './payment.scss';

function Payment() {
  const [chosen, setchosen] = useState<string>('visa');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const select = (e: React.MouseEvent<HTMLButtonElement>) => {
    setchosen(e.currentTarget.children[0].getAttribute('alt') as string);
  };

  return (
    <Layout>
      <div className="paymentPage">
        <h1 className="title">Check Out</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Card Number"
            {...register('Card Number', { required: true, maxLength: 20 })}
          />
          <div className="cardtype">
            <button type="button" onClick={select}>
              <img className={chosen === 'visa' ? 'chosen' : ''} src={visa} alt="visa" />
            </button>
            <button type="button" onClick={select}>
              <img
                className={chosen === 'mastercard' ? 'chosen' : ''}
                src={mastercard}
                alt="mastercard"
              />
            </button>
            <button type="button" onClick={select}>
              <img
                className={chosen === 'americanExpress' ? 'chosen' : ''}
                src={americanExpress}
                alt="americanExpress"
              />
            </button>
          </div>
          <input
            type="datetime"
            placeholder="Expiration Month"
            {...register('Expiration Month.', { required: true })}
          />
          <input
            type="datetime"
            placeholder="Expiration Year"
            {...register('Expiration Year', { required: true })}
          />
          <input type="text" placeholder="CVV" {...register('CVV', { maxLength: 3 })} />
          <input type="text" placeholder="Card Holder Name" {...register('Card Holder Name', {})} />
          <div className="remember">
            <input
              type="checkbox"
              placeholder="Save credit information"
              {...register('Save credit information', {})}
            />
            <p>Remeber details</p>
          </div>
          <Button type="submit" size="medium" group="primary">
            Pay
          </Button>
        </form>
      </div>
    </Layout>
  );
}
export default Payment;
