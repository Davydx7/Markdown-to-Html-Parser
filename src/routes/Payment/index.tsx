import { useForm } from 'react-hook-form';
import { addHours } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import visa from '../../assets/png/visa.png';
import mastercard from '../../assets/png/mastercard.png';
import americanExpress from '../../assets/png/americanExpress.png';
import useBookedFlights from '../../stores/clientStores/bookedFlights';

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

  const navigate = useNavigate();

  const addBookedFlight = useBookedFlights((state) => state.addBookedFlight);

  const onSubmit = (data: any) => {
    addBookedFlight({
      id: faker.database.mongodbObjectId(),
      name: `${faker.name.firstName()} Airways`,
      from: faker.address.state(),
      to: faker.address.state(),
      departureDate: new Date().toJSON(),
      arrivalDate: addHours(new Date(), 12).toJSON(),
      price: faker.datatype.number({ min: 100, max: 900, precision: 0.01 })
    });

    console.log(data);

    navigate('/bookings');
  };

  return (
    <Layout>
      <div className="paymentPage">
        <h1 className="title">Check Out</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span className="label">
              Card Number:<i>*</i>
            </span>
            <input
              type="text"
              placeholder="Card Number "
              {...register('cardNumber', {
                required: 'required',
                minLength: {
                  value: 15,
                  message: 'minimum length 15 digits'
                },
                maxLength: {
                  value: 19,
                  message: 'maximun length 19 digits'
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Invalid card number'
                }
              })}
            />
            {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
          </label>

          <fieldset>
            <span className="label">Card Type:</span>
            <div className="cards">
              <label htmlFor="visa">
                <input
                  {...register(
                    'cardType'
                    // { required: 'required' }
                  )}
                  name="cardType"
                  type="radio"
                  id="visa"
                  value="visa"
                />
                <img src={visa} alt="visa" />
              </label>

              <label htmlFor="masterCard">
                <input
                  {...register(
                    'cardType'
                    // { required: 'required' }
                  )}
                  name="cardType"
                  type="radio"
                  id="masterCard"
                  value="masterCard"
                />
                <img src={mastercard} alt="mastercard" />
              </label>

              <label htmlFor="americanExpress">
                <input
                  {...register(
                    'cardType'
                    // { required: 'required' }
                  )}
                  name="cardType"
                  type="radio"
                  id="americanExpress"
                  value="americanExpress"
                />
                <img src={americanExpress} alt="americanExpress" />
              </label>
              {errors.cardType && <span className="error">{errors.cardType.message}</span>}
            </div>
          </fieldset>

          <label>
            <span className="label">
              Expiry Month:<i>*</i>
            </span>
            <input
              maxLength={2}
              type="text"
              min={1}
              max={12}
              placeholder="Expiration Month 2 digits"
              {...register('expiryMonth', {
                required: 'required',
                minLength: { value: 2, message: 'minimun length 2 digits' },
                maxLength: { value: 2, message: 'maximun length 2 digits' },
                pattern: { value: /^[0-9]*$/, message: 'Invalid expiry month' }
              })}
            />
            {errors.expiryMonth && <span className="error">{errors.expiryMonth.message}</span>}
          </label>

          <label>
            <span className="label">
              Expiry Year:<i>*</i>
            </span>
            <input
              maxLength={2}
              type="text"
              min={1}
              max={99}
              placeholder="Expiration Year 2 digits"
              {...register('expiryYear', {
                required: 'required',
                minLength: { value: 2, message: 'minimun length 2 digits' },
                maxLength: { value: 2, message: 'maximun length 2 digits' },
                pattern: { value: /^[0-9]*$/, message: 'Invalid expiry year' }
              })}
            />
            {errors.expiryYear && <span className="error">{errors.expiryYear.message}</span>}
          </label>

          <label>
            <span className="label">
              CVV:<i>*</i>
            </span>
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
            <span className="label">
              Card holder&apos;s name:<i>*</i>
            </span>
            <input
              type="text"
              placeholder="Input name"
              {...register('name', {
                required: 'required',
                pattern: { value: /^[a-zA-Z\s]{2,}$/, message: 'Invalid name' }
              })}
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
