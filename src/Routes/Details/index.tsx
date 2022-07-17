import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { startOfToday, addDays } from 'date-fns';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Autocomplete from '../../components/Autocomplete';
import './details.scss';

export type FormValues = {
  From: string;
  To: string;
  departureDate: string;
};

const Details: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      From: '',
      To: '',
      departureDate: ''
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);

    navigate('/list');
  };
  // console.log(errors);
  const today = startOfToday();
  const tomorrow = addDays(today, 1);
  const next2days = addDays(today, 2);

  return (
    <Layout>
      <div className="detailsPage">
        <h2 className="title">Book your next flight!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Autocomplete
            placeholder="Departure location"
            name="From"
            control={control}
            rules={{
              required: 'required',
              validate: () => watch('From') !== watch('To') || 'Locations must be different'
            }}
          />

          <Autocomplete
            placeholder="Destination"
            name="To"
            control={control}
            rules={{
              required: 'required',
              validate: () => watch('From') !== watch('To') || 'Locations must be different'
            }}
          />

          <label>
            <span className="label">
              Departure Day<i>*</i>
            </span>
            <select {...register('departureDate', { required: 'required' })}>
              <option selected disabled value="">
                {' '}
                Select a day
              </option>
              <option value={today.getDate()}>{`Today, ${today.toLocaleDateString('en-GB', {
                weekday: 'long'
              })}`}</option>
              <option value={tomorrow.getDate()}>{`Tommorow, ${tomorrow.toLocaleDateString(
                'en-GB',
                {
                  weekday: 'long'
                }
              )}`}</option>
              <option value={next2days.getDate()}>
                {next2days.toLocaleDateString('en-GB', {
                  weekday: 'long'
                })}
              </option>
            </select>
            {errors.departureDate && <span className="error">{errors.departureDate.message}</span>}
          </label>

          <Button disabled={!isValid} type="submit">
            Search Flight
          </Button>
        </form>
      </div>
    </Layout>
  );
};
export default Details;
